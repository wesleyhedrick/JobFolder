const express = require('express');
const router = express.Router();
const {dashboardController} = require('../controllers')

router  .get('/', dashboardController.loadDashboard)
        .post('/', dashboardController.iJustApplied)
        .post('/', dashboardController.iMadeAContact)
        .get('/dashboard-data/:id', dashboardController.loadDashboard)
        .post('/new-IQ', dashboardController.createNewIQ)
        .post('/new-job-application', dashboardController.createNewAppRecord)
        .get('/interview-questions', dashboardController.getIQs)
        .get('/job-tracker', dashboardController.getJobs)
        .get('/:doc_type', dashboardController.getDocList)


module.exports = router