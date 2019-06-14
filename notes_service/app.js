const express = require('express')
const mongoose = require('mongoose')

const app = express()


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

app.listen(1001, () => {
    console.log('Server started at port 1001')
})
