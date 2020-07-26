const express = require('express')
const router = express.Router()
const fs = require('fs')

const marcasController = require('../controllers/marcasController')

router.get('/',marcasController.marcas)
router.get('/:marca', marcasController.marca)

module.exports = router