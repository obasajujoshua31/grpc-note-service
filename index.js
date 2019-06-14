const grpc = require('grpc')
// const notesProto = grpc.load('notes.proto')
const protoLoader = require('@grpc/proto-loader')
const notes = [
    { id: '1', title: 'Note 1', content: 'Content 1'},
    { id: '2', title: 'Note 2', content: 'Content 2'}
]


const server = new grpc.Server()

const packageDefinition = protoLoader.loadSync(
    './notes.proto',
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);


server.addService(protoDescriptor.NotesService.service, {
    list: (_, callback) => {
        callback(null, notes)
    },
})
server.bind('localhost:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()

