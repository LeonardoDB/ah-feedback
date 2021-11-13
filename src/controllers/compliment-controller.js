const ComplimentModel = require('../models/compliment-model');

module.exports = {
    getAll: async (req, res) => {
        const allCompliments =  await ComplimentModel.find({}).lean();
        res.json(allCompliments)
    },
    getAllByEmployeeId: async (req, res) => {
        const {id} = req.body;
        const allComplimentsById = await ComplimentModel.find({toId: id});
        res.json(allComplimentsById);
    },
    create: async (req, res) => {
        const payload = req.body;

        try {
            const complimentCreated = await ComplimentModel.create(payload);
            res.status(200).json(complimentCreated);
            console.log('teste')
        } catch (error) {
            console.log(error);
        }
    }
}