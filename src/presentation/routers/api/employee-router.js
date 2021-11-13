const express = require('express')
const EmployeeController = require('../../../controllers/employee-contoller')
const router = express.Router()

router.get('/', EmployeeController.getAll)

module.exports = router;