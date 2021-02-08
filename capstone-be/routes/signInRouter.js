const express = require('express');
const router = express.Router();
const {signInController} = require('../controllers')

router.post('/', signInController.signInVerify)

module.exports = router