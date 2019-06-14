const  bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = require('./config')

module.exports.hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt)
}


module.exports.comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword)
}

module.exports.generateToken = (user) => {
    return jwt.sign({userId: user.id}, jwtSecret)
}

module.exports.httpResponse = (res, statusCode, message, data) => {
    return res.status(statusCode).json({
        success: statusCode < 300,
        message,
        data 
    })
}


module.exports.serverError = (res) => {
    return res.status(500).json({
        success: false,
        message: 'Unknown Error occurred'
    })
}
