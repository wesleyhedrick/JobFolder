const express = require('express');
const router = express.Router();
const {signUpController} = require('../controllers')

router.post('/', signUpController.createNewUser)

module.exports = router