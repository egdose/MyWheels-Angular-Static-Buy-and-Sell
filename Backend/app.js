//Importing Required modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./route');

//Connecting to the database
mongoose.connect('mongodb://localhost:27017/meanapp');
mongoose.connection.on('connected', () => {
    console.log('Connected to database!');
});
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('Error in database connection : ' + err);
    }
});

//Port Number
const port = process.env.PORT || 3000;

//Setting up the middleware
app.use(cors());
app.use(bodyparser.json());

//Setting Route
app.use('/api/vehicle', route);

//Static Output
app.use(express.static(path.join(__dirname, 'public')));

//Test
app.get('/', (req, res) => {
    res.send('Hello World');
});

//Binding the port
app.listen(port, () => {
    console.log('Backend running at port ' + port);
});