const client = require('./client')
let noteToUpdate = {
    id: '1',
    title: "Hello",
    content: "World"
}
client.update(noteToUpdate).then((note) => {
       console.log('Note updated successfully', note)
}).catch(error => {
    console.error('There is error', error)
})
