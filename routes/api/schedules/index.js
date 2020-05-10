const express = require('express');
const router = express.Router();
const { auth } = require('../../../secret');
const { validation, paramValidation } = require('./schedules.validation')
const c = require('./schedules.controller')
 
router.get('/', auth, c.findAll)
router.get('/:id', auth, paramValidation, c.findById)
router.post('/', auth, validation, c.insert)
router.put('/:id', auth, paramValidation, validation, c.updateById)
router.delete('/', auth, c.remove)
router.delete('/:id', auth, paramValidation, c.removeById)
 
module.exports = router;