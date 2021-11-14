const ComplimentModel = require('../models/compliment-model');
const { ObjectId } = require('mongodb');
const { pluralize } = require('mongoose');

module.exports = {
    getAll: async (req, res) => {
        const { id } = req.query;

        const allCompliments =  await ComplimentModel.find({}).lean();
        allCompliments.forEach(setLiked(id));

        res.json(allCompliments)
    },
    getAllByEmployeeId: async (req, res) => {
        const { id } = req.body;

        const allComplimentsById = await ComplimentModel.find({toId: id});
        allComplimentsById.forEach(setLiked(id));

        res.json(allComplimentsById);
    },
    create: async (req, res) => {
        const payload = req.body;
        try {
            const complimentCreated = await ComplimentModel.create(payload);
            res.status(200).json(complimentCreated);
        } catch (error) {
            console.log(error);
        }
    },
    updateReaction: async (req, res) => {
        const {id, employeeId, liked} = req.body;

        try {
            const operation = ({true: '$push', false: '$pull'})[liked]
            await ComplimentModel.updateOne({_id: ObjectId(id)}, {[operation]: { reactions: employeeId }});
            const result = await ComplimentModel.findOne({_id: ObjectId(id)});
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
        }
    },
    deleteAll: async (req, res) => {
        try {
           await ComplimentModel.deleteMany({});
        } catch (error) {
            console.log(error);
        }
    }
}

const setLiked = (id) => (compliment) => {
    const liked = compliment.reactions.includes(id)
    compliment.liked = liked
}