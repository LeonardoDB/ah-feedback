const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const complimentSchema = new Schema({
    createdAt: {type: Date, default: Date.now()},
    fromId: {type: String},
    toId: {type: String},
    content: {type: String},
})

module.exports = Mongoose.model('complimentSchema', complimentSchema);
