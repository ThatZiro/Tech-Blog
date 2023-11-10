const router = require('express').Router();
const accountRoutes = require('./accountRoutes');
const postRoute = require('./postRoute');
const commentRoute = require('./commentRoutes');

router.use('/account', accountRoutes);
router.use('/post', postRoute);
router.use('/comment', commentRoute);

module.exports = router;
