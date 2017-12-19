const express = require('express');
const app = express();
const router = express.Router();
var mongoose = require('mongoose');
const config = require ('./config/database');
const path = require ('path');

const bodyParser = require ('body-parser');
const cors = require('cors');

var userRoute    = require('./routes/user');
var profilerout = require('./routes/profilerout');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) =>{
    if(err){
        console.log('Could NOT connect to database:',err);
    }
    else{
        console.log(config.secret);
        console.log('Connected to database: ' + config.db);
    }
});




app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static(__dirname + '/client/dist/'));

app.use('/user', userRoute);
app.use('/profilerout',profilerout);
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, UPDATE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With, Content-Type,Accept, Authorization');
  next();
});

app.get('*', (req, res) => {
  res.send(path.join(__dirname +'/client/dist/index.html'));
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})