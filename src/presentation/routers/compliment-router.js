const router = require('express').Router();
const complimentController = require('../../controllers/compliment-controller');
const { validateRequiredFieldInCompliment } = require('../middlewares/helper/validator');

router.get('/', complimentController.getAll);

router.get('/:id', complimentController.getAllByEmployeeId);

router.post('/', validateRequiredFieldInCompliment, complimentController.create);

router.patch('/:id/reaction', complimentController.updateReaction);

router.delete('/', complimentController.deleteAll);

module.exports = router;