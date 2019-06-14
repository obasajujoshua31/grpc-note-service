const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const services = require('./services');
const protoPath = __dirname + '/protos/user.proto'

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

const startGrpc = () => {
    server.addService(protoDescriptor.users.UsersService.service, {
        authenticate: services.authenticateUser
    })
    server.bind('localhost:50051', grpc.ServerCredentials.createInsecure())
    console.log('Server running at http://127.0.0.1:50051')
    server.start()
    
}

module.exports = startGrpc
