const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const logger = require('morgan')
const routes = require('./routes')
const startGrpc = require('./grpc')

const app = express()



mongoose.connect('mongodb://localhost:27017/users-service', {useNewUrlParser: true}).then(() => {
    console.log('Database connected successfully')
}).catch(error => {
    console.log('Unable to connect', error)
})


app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Welcome to Users Service'
    })
})

app.use('/auth', routes)


app.all('*', (req, res) => {
    return res.status(404).json({
        message: 'End point is not found'
    })
})

app.listen(1002, () => {
    console.log('Server started at port 1002')
})

startGrpc()
