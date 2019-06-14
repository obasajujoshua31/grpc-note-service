const client = require('./client')
client.list({}, (error, result) => {
    if (!error) {
        console.log('successfully fetch List notes')
        console.log(result)
    } else {
        console.error('There is error', error)
    }
})
