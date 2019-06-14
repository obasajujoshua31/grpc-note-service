const grpc = require('grpc')
const caller = require('grpc-caller')

const client = caller('localhost:50051', './user.proto', 'UsersService', grpc.credentials.createInsecure())

module.exports.getUserInfo = (req, res, next) => {

    client.authenticate({ token :req.headers.authorization }).then(result => {
            req.user = result
            next()
    }).catch(error => {
        return res.status(401).json({
            success: false,
            message: 'User authenticated'
        })
    })
} 


