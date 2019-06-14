const grpc = require('grpc')
const caller = require('grpc-caller')


const client = caller('localhost:50051', __dirname + '/../notes.proto', 'NotesService', grpc.credentials.createInsecure())

module.exports = client
