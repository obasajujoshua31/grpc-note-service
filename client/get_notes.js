const client = require('./client')

client.list({}).then((notes) => {
    console.log('These are the notes', notes)
}).catch(error => {
    console.error('There is error', error)
})
