const express = require('express');
const router = express.Router();
const {dashboardController} = require('../controllers')

router  .get('/', dashboardController.loadDashboard)
        .post('/', dashboardController.iJustApplied)
        .post('/', dashboardController.iMadeAContact)
        .post('/upload/:id', dashboardController.uploadDoc)
        .get('/contacts/:id', dashboardController.getContacts)
        .get('/dashboard-data/:id', dashboardController.loadDashboard)
        .post('/new-IQ', dashboardController.createNewIQ)
        .post('/new-job-application', dashboardController.createNewAppRecord)
        .get('/interview-questions/:id', dashboardController.getIQs)
        .get('/job-tracker/:id', dashboardController.getJobs)
        .get('/:doc_type/:id', dashboardController.getDocList)


module.exports = router