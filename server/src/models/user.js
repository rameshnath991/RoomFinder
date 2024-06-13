const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    midName: String,
    lastName: String,
    phoneNumber: String,
    address: String,
    email:String,
    password:String,
    role: {
      type: String,
      enum : ['admin','user'],
      default: 'user'
    },
  });
  
  const User = mongoose.model('User', userSchema);
  module.exports= User