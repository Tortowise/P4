const Router = require('express');
const router = new Router();
const answerRouter = require('../controllers/answerController.js');


router.get('/', answerRouter.getAll);
router.post('/', answerRouter.create);

module.exports = router;