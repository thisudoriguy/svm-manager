const express = require('express');
const router = express.Router();
const { calculateServerHardware } = require('../controllers/vmsandservers');
const { validateRequest } = require('../handlers/validation');

router.post('/calculate', validateRequest, calculateServerHardware)

module.exports = router; 