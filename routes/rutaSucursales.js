const express = require('express')
const router = express.Router()
const fs = require('fs')
const sucursalesController = require('../controllers/sucursalesController')

router.get('/', sucursalesController.sucursales)
router.get('/:sucursal', sucursalesController.sucursal)

module.exports = router