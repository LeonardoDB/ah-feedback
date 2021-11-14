const router = require('express').Router();
const complimentController = require('../../controllers/compliment-controller');

router.get('/', complimentController.getAll);

router.get('/:id', complimentController.getAllByEmployeeId);

router.post('/', complimentController.create);

router.patch('/reaction', complimentController.updateReaction);

router.delete('/', complimentController.deleteAll);

module.exports = router;