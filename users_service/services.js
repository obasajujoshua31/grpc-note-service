const User = require('./models/user');
const jwt = require('jsonwebtoken')
const jwtSecret = require('./config')

module.exports.createUser = (user) => {
    const newUser = new User({
        name: user.name,
        password: user.password,
        email: user.email
    })
    return new Promise((resolve, reject) => {
        newUser.save().then((user) => {
            resolve(user)
        }).catch((error) => {
            reject(error)
        })
    })
   
}

module.exports.findUser = (email) => {
    return new Promise((resolve, reject) => {
        User.findOne({email}).then(user => {
            resolve(user)
        }).catch(error => {
            reject(error)
        })
    })  
}


module.exports.findUserById = (id) => {
    return new Promise((resolve, reject) => {
        User.findById(id).then(user => {
            resolve(user)
        }).catch(error => {
            reject(error)
        })
    })  
}


module.exports.authenticateUser = (call, callback) => {
    const token = call.request.token
    jwt.verify(token, jwtSecret, (err, decoded) => {
        if(err){
            callback({
                error: grpc.status.UNAUTHORIZED,
                message: "user is not authorized"
            })
        } else {
            User.findById(decoded.userId, (err, user) =>  {
                if(err){
                    callback({
                        error: grpc.status.NOT_FOUND,
                        message: "user is not found"
                    })  
                } else {
                    callback(null, user)
                }
            })
        }
    })
}
