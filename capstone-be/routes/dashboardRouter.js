const express = require('express');
const router = express.Router();
const {dashboardController} = require('../controllers')

router  .get('/', dashboardController.loadDashboard)
        .post('/', dashboardController.iJustApplied)
        .post('/', dashboardController.iMadeAContact)

module.exports = router