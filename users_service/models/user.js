const utils = require('../utils')

  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    name:  {
       type: String,
       required: true
    },
    email:  {
    type: String,
    required: true
    },
    password: {
        type: String,
        required: true
    }
  });

  userSchema.pre('save', function() {
        this.password = utils.hashPassword(this.password)
  });


  userSchema.methods.isMatch = function(password) {
        return utils.comparePassword(password, this.password)
  };




  module.exports = mongoose.model('User', userSchema)
