var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  //Form                    = require('../models/form.model'),
  mongooseUniqueValidator = require('mongoose-unique-validator');

var user = new Schema({

  email: { type: String, unique: true, required: true, lowercase: true },
  password: { type: String, required: true },
  //address:{type:String,required: true},
  name: { type: String, required: true },
  age: { type: Number, required: true },
  country: { type: String, required: true },
  contact: { type: String, unique: true, required: true },
  resetPasswordToken: String,
  resetPasswordExpires: String,
  role: { type: Array, default: ['user'] },
  profilePic: String,

},
  {
    timestamps: true
  });

user.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', user);
