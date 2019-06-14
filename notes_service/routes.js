const express = require('express')
const router = express.Router()
const controller = require('./controllers')
const middlewares = require('./middleware')


router.post('/add',  middlewares.getUserInfo, controller.createNewNote)

module.exports = router;
