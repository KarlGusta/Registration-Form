var express = require('express');
var path = require('path');
var mysql = require('mysql');
const { response } = require('express');

var app = express();

// Server static files
app.use(express.static("public"));

app.listen(4000);