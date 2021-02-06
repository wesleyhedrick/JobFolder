const express = require('express');
const router = express.Router();
const {loginController} = require('../controllers')

router.get('/', loginController.loginVerify)

module.exports = router