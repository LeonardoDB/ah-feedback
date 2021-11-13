const router = require('express').Router();
const complimentController = require('../../controllers/compliment-controller');

router.get('/getAll', complimentController.getAll);

router.get('/getAllById', complimentController.getAllByEmployeeId);

router.post('/create', complimentController.create);

module.exports = router;