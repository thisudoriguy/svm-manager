const express = require('express');
const router = express.Router();
const { test } = require('../controllers/vmsandservers');

router.get('/foo', test)

module.exports = router; 