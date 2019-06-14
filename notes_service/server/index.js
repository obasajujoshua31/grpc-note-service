const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const controllers = require('./controllers');
const protoPath = __dirname + '/../notes.proto'

const server = new grpc.Server()

const packageDefinition = protoLoader.loadSync(
    protoPath,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);


server.addService(protoDescriptor.proto.NotesService.service, {
    list: controllers.list,
    find: controllers.find,
    delete: controllers.delete,
    insert: controllers.insert,
    update: controllers.update
})
server.bind('localhost:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()

