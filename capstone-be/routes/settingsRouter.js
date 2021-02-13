const express = require('express');
const router = express.Router();
const { settingsController } = require('../controllers')

router.post('/', settingsController.updateSettings)

module.exports = router

