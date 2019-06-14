const express = require('express');
const router = express.Router()
const controller = require('./controllers')

router.post('/register', controller.registerUser)
router.post('/login', controller.logInUser)
router.get('/user', controller.getUserByToken)

module.exports = router;

