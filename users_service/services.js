const User = require('./models/user');

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
        User.find({email}, {}).then(user => {
            resolve(user)
        }).catch(error => {
            reject(error)
        })
    })  
}
