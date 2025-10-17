const express = require('express');
const router = express.Router();
const homeRouter = require('./homeRouter');

router.use('/',homeRouter);

module.exports = router;