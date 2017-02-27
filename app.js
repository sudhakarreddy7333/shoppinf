var express = require('express');
var bodyParser = require('body-parser');
var apis = require('./apis');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var chalk = require('chalk');
var db_path = '';

//app.engine('html', ejs.renderFile); helpful in using html template engine
//app.set('view engine','html'); helpful in using html template engine

app.set('mode',config.mode);
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/api', apis);

switch(app.get('mode')) {
    case 'production' : 
        console.log(app.get('mode') + ' mode activated');
        db_path = 'mongodb://localhost/production';
        break;
    case 'qa' : 
        console.log(app.get('mode') + ' mode activated');
        db_path = 'mongodb://'+process.env.username+':'+process.envpassword+'@ds161109.mlab.com:61109/nodebasic';
        break;
    case 'dev' : 
        console.log(app.get('mode') + ' mode activated');
        db_path = 'mongodb://localhost/dev';
        break;
}
//connecting to mongodb
mongoose.connect(db_path);
mongoose.connection.on('connected', function(){
    console.log(chalk.yellow('Connected to ' + app.get('mode') + ' db'));
});
mongoose.connection.on('error', function(err){
    console.log(chalk.red('Db connection failed from', err));
});

module.exports = app;


