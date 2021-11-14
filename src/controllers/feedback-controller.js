const FeedbackModel = require('../models/feedback-model');

module.exports = {
    getAll: async (req, res) => {
        const allFeedbacks =  await FeedbackModel.find({}).lean();
        res.json(allFeedbacks);
    },
    getAllByEmployeeId: async (req, res) => {
        const { id } = req.params;
        const allFeedbacksById = await FeedbackModel.find({toId: id}).lean();
        res.json(allFeedbacksById);
    },
    create: async (req, res) => {
        const payload = req.body;
        try {
            const feedbackCreated = await FeedbackModel.create(payload);
            res.status(200).json(feedbackCreated);
        } catch (error) {
            console.log(error);
        }
    }
};