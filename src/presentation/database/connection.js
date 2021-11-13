const Mongoose = require('mongoose');

/* istanbul ignore next */
const URL = `mongodb+srv://matrixTeam:ssffdd66@cluster0.nedvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const connectDatabase = () => {
    const connectionOptions = {  useNewUrlParser: true };

    Mongoose.connect(URL, connectionOptions);

}

exports.connectDatabase = connectDatabase;