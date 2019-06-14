const express = require('express');
const router = express.Router()
const controller = require('./controllers')

router.post('/register', controller.registerUser)

module.exports = router;

