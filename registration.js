var express = require('express');
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();

// Server static files
// app.use(express.static("public"));

// To extract the form data from the html file
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request,response) {
    response.sendFile(__dirname + '/registration-form.html');
})

// Database connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'registrationdb'
});

// Check if connected
connection.connect(function(error) {
    if(!!error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.post('/registration-action', function(request,response) {
    var employee = {
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        location: request.body.location,
        age: request.body.age,
        email: request.body.email,
        phonenumber: request.body.phonenumber
    };

    connection.query('INSERT INTO employees SET?', employee, function(error, result) {
        if(error) {
            throw error;
        } else {
            response.send("Congratulations!Information received!");
        }
    });
});


app.listen(4000);
