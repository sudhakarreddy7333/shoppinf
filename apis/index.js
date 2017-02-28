var express = require('express');
var home = express();

home.use('/Authenticate',require('./authenticate/login'));

module.exports = home;