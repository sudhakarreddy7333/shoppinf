var express = require('express');
var bodyParser = require('body-parser');
var home = require('./apis');
var app = express();
var config = require('./config');
//app.engine('html', ejs.renderFile); helpful in using html template engine
//app.set('view engine','html'); helpful in using html template engine

app.set('mode',config.mode);
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
//app.use('/', home);
app.use('/api', home);

switch(app.get('mode')) {
    case 'production' : 
        console.log(app.get('mode') + ' mode activated');
        break;
    case 'qa' : 
        console.log(app.get('mode') + ' mode activated');
        break;
    case 'dev' : 
        console.log(app.get('mode') + ' mode activated');
        break;
}

module.exports = app;


