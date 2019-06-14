const client = require('./client')
client.delete({ id: '1' }).then((result) => {
        console.log('Note Has been successfully deleted', result)
}).catch(error => {
    console.error('There is error', error)
}) 

