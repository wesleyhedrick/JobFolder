const express = require('express');
const router = express.Router();
const {dashboardController} = require('../controllers')

router  .get('/', dashboardController.loadDashboard)
        .post('/', dashboardController.iJustApplied)
        .post('/', dashboardController.iMadeAContact)
        .get('/interview-questions', dashboardController.getIQs)
        .get('/job-tracker', dashboardController.getJobs)
        .get('/:doc_type', dashboardController.getDocList)


module.exports = router