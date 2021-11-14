const express = require('express');
const app = express();

const port = process.env.PORT || 3002;

require('dotenv').config();

app.use(express.json());

const middleWares = require('../presentation/middlewares/auth-middleware');

app.use(middleWares);

const EmployeeRouter = require('../presentation/routers/api/employee-router');
const FeedbackRouter = require('../presentation/routers/feedback-router');
const ComplimentsRouter = require('../presentation/routers/compliment-router');

require('../presentation/database/connection').connectDatabase();
app.use('/employee', EmployeeRouter);
app.use('/feedback', FeedbackRouter);
app.use('/compliment', ComplimentsRouter);

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}

module.exports = app