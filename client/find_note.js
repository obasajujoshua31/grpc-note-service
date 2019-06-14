const client = require('./client')

client.find({id: "2"}).then((result) => {
        console.log('This is the note:', result)
    }).catch(error => {
        console.error('There is error', error)
    })
