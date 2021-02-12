const express = require('express');
const router = express.Router();
const {signInController} = require('../controllers')

router.post('/', signInController.signInVerify)
        .get('/check-session', signInController.checkSession)
        .get('/sign-out',signInController.signOut)

module.exports = router