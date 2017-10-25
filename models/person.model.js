const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name1: { type: String },
  gender: { type: String },
  age: { type: Number },
  phoneNumber: { type: Number }
});

module.exports = mongoose.model('Person', personSchema);
/*var mongoose                = require('mongoose');
var   Schema                  = mongoose.Schema;
 
 
 var PersonSchema =new Schema({
     name: String,
     age: Number
 });



 module.exports = mongoose.model('Person', PersonSchema);*/