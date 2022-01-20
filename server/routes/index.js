const Router = require('express');
const router = new Router();

const answerRouter = require('./answerRouter');
const postRouter = require('./postRouter');
const userRouter = require('./userRouter');
const ratingRouter = require('./ratingRouter');

router.use('/user', userRouter);
router.use('/rating',ratingRouter);
router.use('/post', postRouter);
router.use('/answer', answerRouter);

module.exports = router;