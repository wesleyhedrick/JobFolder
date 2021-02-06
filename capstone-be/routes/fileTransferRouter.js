const express = require('express');
const router = express.Router();
const {fileTransferController} = require('../controllers')

router.get('/download', fileTransferController.downloadDocument)

module.exports = router