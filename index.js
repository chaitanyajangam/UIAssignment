const express = require('express');
const app = express();
const router = express.Router();
var mongoose = require('mongoose');
const config = require ('./config/database');
const path = require ('path');
const person = require ('./routes/personrout')(router);
const bodyParser = require ('body-parser');
const cors = require('cors');


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

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static(__dirname + '/client/dist/'));
app.use('/person', person);


app.get('*', (req, res) => {
  res.send(path.join(__dirname +'/client/dist/index.html'));
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})