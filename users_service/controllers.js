const Service = require('./services')
const utils = require('./utils')
const isEmpty = require('lodash.isempty');

module.exports.registerUser = (req, res) => {
    const email = req.body.email;
    const that = Service
    Service.findUser(email).then(user => {
        if(!isEmpty(user)){
            return utils.httpResponse(res, 400, 'Email not available')
        }
         that.createUser(req.body).then(user => {
            const token = utils.generateToken(user)
            const payload = {
                user,
                token
            }
            return utils.httpResponse(res, 201, 'User Registered Successfully', payload)
        })
    }).catch(() => {
        return utils.serverError(res)
    })
}


module.exports.logInUser = (req, res) => {
    const email = req.body.email;

    Service.findUser(email).then(user => {
        if(isEmpty(user)){
            return utils.httpResponse(res, 400, 'Invalid Email or Password')
        }

        if(user.matchesPassword(req.body.password)) {
            const token = utils.generateToken(user)
            const payload = {
                user, 
                token
            }
            return utils.httpResponse(res, 200, 'User Logged In Successfully', payload)
        }
        return utils.httpResponse(res, 400, 'Invalid Email or Password')
    }).catch(() => {
        return utils.serverError(res)
    })
}


module.exports.getUserByToken = (req, res) => {
        const token = req.headers.authorization;
        if(typeof token === 'undefined'){
            return utils.httpResponse(res, 401, 'No Access Token')
        }
        try {
          const id = utils.verifyToken(token).userId
            Service.findUserById(id).then(user => {
                if(user){
                    return utils.httpResponse(res, 200, 'User retrieved successfully', user)
                }
                return utils.httpResponse(res, 404, 'User is not found')
            })
        } catch (error) {
            return utils.httpResponse(res, 401, 'User Unauthenticated')
        }
}
