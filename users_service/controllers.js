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
