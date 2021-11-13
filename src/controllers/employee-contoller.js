const RequestHelper = require('../utils/helpers/request-helper')

module.exports = { 
    getAll: async (req, res) => {
        try {
            let filter = ''
            if (req.query?.name) {
                filter += `&filter[busca_nome]=${req.query.name}`
            }
            
            const config = {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": req.headers.authorization
                }
            }

            const result = await RequestHelper.get(`${process.env.url}/api/funcionarios?active=true&limit=30${filter}`, config)
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

            res.status(200).send({ employees })
        } catch (err) {
            console.log(err)
        }
    }
 }