const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const routes = require('./routes')


const app = express()


app.use(logger('dev'));

app.use(express.json())
app.use(express.urlencoded({extended: false}))

mongoose.connect('mongodb://localhost:27017/notes_service', {useNewUrlParser: true}).then(() => {
    console.log('Database connected successfully')
}).catch(error => {
    console.log('Unable to connect', error)
})

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Welcome to Notes Service'
    })
})

app.use('/notes', routes)

app.all('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'end point is not found'
    })
}) 

app.listen(1001, () => {
    console.log('Server started at port 1001')
})
