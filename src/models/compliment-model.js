const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const complimentSchema = new Schema({
    createdAt: {type: Date, default: Date.now()},
    fromId: {type: String},
    toId: {type: String},
    toName: {type: String},
    content: {type: String},
    reactions: {type: Array}
})

module.exports = Mongoose.model('compliment', complimentSchema);
