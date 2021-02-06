const express = require('express');
const router = express.Router();
const { profileController } = require('../controllers')

router.get('/', profileController.updateProfile)

module.exports = router

