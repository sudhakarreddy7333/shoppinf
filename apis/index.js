var express = require('express');
var home = express();

var envmnt = process.env.NODE_ENV || 'dev';
home.set('envrmnt',envmnt);

home.use('/Authenticate',require('./authenticate/login'));

home.get('/getEnv',function(req,res){
    res.send(home.get('envrmnt'));
});

module.exports = home;