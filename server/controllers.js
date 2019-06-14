const notes = require('./db')
const uuid = require('uuid');

module.exports.list = (call, callback) => {
    callback(null, {notes})
};


module.exports.find = (call, callback) => {
    const note = notes.find((note) => note.id === call.request.id)
    if(note){
        callback(null, note)
    } else {
        callback({
            code: grpc.status.NOT_FOUND,
            details: "NOT FOUND"
        })
    }

}

module.exports.insert = (call, callback) => {
    let note = call.request
    note.id = uuid.v1()
    notes.push(note)
    callback(null, note)
};


module.exports.delete =  (call, callback) => {
    let existingNoteIndex = notes.findIndex((n) => n.id == call.request.id)

    if (existingNoteIndex != -1) {
        notes.splice(existingNoteIndex, 1)
        callback(null, {})
    } else {
        callback({
            code: grpc.status.NOT_FOUND,
            details: "Not found"
        })
    }
  }


  module.exports.update = (call, callback) => {
      const id = call.request.id
      let existingNoteIndex = notes.findIndex((n) => n.id == id)

      if (existingNoteIndex != -1) {
        notes[existingNoteIndex] = call.request
        callback(null, {notes})
    } else {
        callback({
            code: grpc.status.NOT_FOUND,
            details: "Not found"
        })
    }

  }
