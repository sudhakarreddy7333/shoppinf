var express = require('express');
var bodyParser = require('body-parser');
var apis = require('./apis');
var app = express();
var db = require('./models/dbconnection');
//app.engine('html', ejs.renderFile); helpful in using html template engine
//app.set('view engine','html'); helpful in using html template engine

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/api', apis);

//Start Database
db();

module.exports = app;


