const client = require('./client')
let newNote = {
    title: "New Note",
    content: "New Note content"
}
client.insert(newNote).then((note) => {
       console.log('New Note created successfully', note)
}).catch(error => {
    console.error('There is error', error)
})
