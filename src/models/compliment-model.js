const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const complimentSchema = new Schema({
    createdAt: {type: Date, default: Date.now()},
    fromId: {type: String, required: true},
    toId: {type: String, required: true},
    toName: {type: String, required: true},
    fromName: {type: String, required: true},
    content: {type: String, required: true},
    reactions: {type: Array, default: []}
})

module.exports = Mongoose.model('compliment', complimentSchema);
