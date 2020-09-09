var express = require('express');
var path = require('path');
var mysql = require('mysql');
const { response } = require('express');

var app = express();

// Server static files
// app.use(express.static("public"));

app.get('/', function(request,response) {
    response.sendFile(__dirname + '/public/registration-form.html');
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
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        location: request.body.location,
        age: request.body.age,
        gender: request.body.gender,
        email: request.body.email,
        phoneNumber: request.body.phoneNumber
    }

    connection.query('INSERT INTO employees SET?', employee, function(error, result) {
        if(error) {
            throw error;
        } else {
            response.send("Congratulations!Information received!");
        }
    });
});


app.listen(4000);