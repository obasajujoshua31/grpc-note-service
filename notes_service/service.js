const Note = require('./models/notes')

module.exports.createNote = (note) => {
    const newNote = new Note({
        title: note.title,
        content: note.content,
        creator: note.creator
    })
    return new Promise((resolve, reject) => {
        newNote.save().then(note => {
            resolve(note)
        }).catch(error => {
            reject(error)
        })
    })
}


module.exports.updateNote = (note) => {
    return new Promise((resolve, reject) => {
        Note.findByIdAndUpdate(id, { title: note.title, content: note.content })
        .then(note => {
            resolve(note)
        }).catch(error => {
            reject(error)
        })
    })
   
}

module.exports.findNoteById = (id) => {
    return new Promise((resolve, reject) => {
        Note.findById(id).then(note => {
            resolve(note)
        }).catch(error => {
            reject(error)
        })
    })
}


module.exports.findAllNotes = () => {
    return new Promise((resolve, reject) => {
        Note.find({}).then(notes => {
            resolve(notes)
        }).catch(error => {
            reject(error)
        })
    })
}


module.exports.deleNote = (id) => {
    return new Promise((resolve, reject) => {
        Note.findByIdAndRemove(id).then(note => {
            resolve(note)
        }).catch(error => {
            reject(error)
        })
    })
}


module.exports.getNoteByUser = (userId) => {
    return new Promise((resolve, reject) => {
        Note.find({creator: userId}).then((notes) => {
            resolve(notes)
        }).catch(error => {
            reject(error)
        })
    })
}
