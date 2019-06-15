  const mongoose = require('mongoose')
  const Schema = mongoose.Schema;
  
  const noteSchema = new Schema({
    title:  {
       type: String,
       required: true
    },
    content:  {
    type: String,
    required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
  });




  module.exports = mongoose.model('Note', noteSchema)
