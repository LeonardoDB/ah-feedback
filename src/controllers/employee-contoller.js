const RequestHelper = require('../utils/helpers/request-helper')

module.exports = { 
    getAll: async (req, res) => {
        try {
            const { name, offset, limit = 30 } = req.query
            const { authorization } = req.headers

            let filter = ''
            if (name) filter += `&filter[busca_nome]=${name}`
            if (offset) filter += `&offset=${offset}`
            if (limit) filter += `&limit=${limit}`

            const config = {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": authorization
                }
            }

            const result = await RequestHelper.get(`${process.env.url}/api/funcionarios?active=true${filter}`, config)
            if (!result) {
                res.status(400).send({
                    error: 'Did not find the employees'
                })
            }
            
            const employees = [];
            result.data.forEach(employee => {
                const data = {
                    _id: employee._id.$oid || '',
                    name: employee.dados.nome || '',
                    department: employee.dados.departamento || ''
                }

                employees.push(data)
            });

            res.status(200).json(employees);
        } catch (err) {
            console.log(err)
        }
    }
 }