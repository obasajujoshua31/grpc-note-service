const grpc = require('grpc')
const PROTO_PATH = './notes.proto'
const protoLoader = require('@grpc/proto-loader')

const packageDefinition = protoLoader.loadSync(
    './notes.proto',
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });


const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const NotesService = protoDescriptor.NotesService
const client = new NotesService('localhost:50051',
    grpc.credentials.createInsecure())

module.exports = client
