const express = require('express')
const app = express()


app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Welcome to the notes',
        
    })
})


app.listen(1001, () => {
    console.log('Server started at port 1001',)
})
