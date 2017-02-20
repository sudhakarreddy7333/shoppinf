var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var index = require('./routes/index');

var app = express();
//app.engine('html', ejs.renderFile); helpful in using html template engine
//app.set('view engine','html'); helpful in using html template engine
app.set('view engine','ejs');
app.set('views',__dirname+'/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use('/', index);

module.exports = app;


