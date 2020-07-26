const express = require('express')
const router = express.Router()
const fs = require('fs')
const mainController = require('../controllers/mainController')

router.get('/', mainController.home)

module.exports = router