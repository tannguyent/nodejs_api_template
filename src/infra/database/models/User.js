const mongoose = require('mongoose')

const UserEntity = require('../../../domain/User')

const UserSchema = mongoose.Schema({
  email: {
    type: String, 
    unique: true, 
    required: true, 
    select: false
  }, 
  encodedPassword: {
    type: String, 
    required: true, 
    select: false
  }, 
  username: {
    type: String, 
    unique: true
  }, 
  lastLogin: {
    type: Date, 
    default: null
  }, 
  roles: {
    type: [String], 
    default: ['USER']
  }
}, {timestamps: true});

// indexes
UserSchema.index({email: 1});
UserSchema.index({username: 1});
UserSchema.index({roles: 1});

// loads the user entity methods in the model
UserSchema.loadClass(UserEntity);

module.exports =  mongoose.model('User', UserSchema);
