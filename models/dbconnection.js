var mongoose = require('mongoose');
var config = require('../config');
var db_path = '';
var db = function (){
    switch(config.mode) {
        case 'production' : 
            console.log(config.mode + ' mode activated');
            db_path = 'mongodb://sudhakar:sudhakar@ds161109.mlab.com:61109/nodebasic';
            break;
        case 'qa' : 
            console.log(config.mode + ' mode activated');
            db_path = 'mongodb://localhost/qa';
            break;
        case 'dev' : 
            console.log(config.mode + ' mode activated');
            db_path = 'mongodb://localhost/dev';
            break;
    }
    //connecting to mongodb
    mongoose.connect(db_path);
    mongoose.connection.on('connected', function(){
        console.log('Connected to ' + config.mode + ' db');
    });
    mongoose.connection.on('error', function(err){
        console.log('Db connection failed from', err);
    });
};

module.exports = db;