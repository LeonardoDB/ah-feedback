const Mongoose = require('mongoose');

/* istanbul ignore next */
const URL = process.env.NODE_ENV !== 'test' ? process.env.MONGO_URL : process.env.MONGO_URL_TEST

const connectDatabase = () => {
    const connectionOptions = {  useNewUrlParser: true };

    Mongoose.connect(URL, connectionOptions);

};

exports.connectDatabase = connectDatabase;