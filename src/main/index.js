const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.json());

const EmployeeRouter = require('../presentation/routers/api/employee-router');
const FeedbackRouter = require('../presentation/routers/feedback-router');
const ComplimentsRouter = require('../presentation/routers/compliment-router');

require('../presentation/database/connection').connectDatabase();
app.use('/employee', EmployeeRouter);
app.use('/feedback', FeedbackRouter);
app.use('/compliment', ComplimentsRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});