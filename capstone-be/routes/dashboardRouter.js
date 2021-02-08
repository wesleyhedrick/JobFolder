const express = require('express');
const router = express.Router();
const {dashboardController} = require('../controllers')

router  .get('/', dashboardController.loadDashboard)
        .post('/', dashboardController.iJustApplied)
        .post('/', dashboardController.iMadeAContact)
        .get('/resumes', dashboardController.getResumeSummary)
        .get('/letters', dashboardController.getResumeSummary)
        .get('/interview_questions', dashboardController.getIQs)

module.exports = router