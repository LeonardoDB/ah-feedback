const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const feedbackSchema = new Schema({
    createdAt: {type: Date, default: Date.now()},
    fromId: {type: String},
    toId: {type: String},
    toName: {type: String},
    content: {type: String},
    stopDoing: {type: Boolean},
    companyCode: {type: String},
    keepDoing: {type: Boolean},
    needImprovement: {type: Boolean}
})

module.exports = Mongoose.model('feedback-model', feedbackSchema);
