const router = require('express').Router();
const feedbackController = require('../../controllers/feedback-controller');

router.get('/', feedbackController.getAll);

router.get('/:id', feedbackController.getAllByEmployeeId);

router.post('/', feedbackController.create);

module.exports = router;