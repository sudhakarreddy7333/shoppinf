var express = require('express');
var home = express();

home.use('/Authenticate',require('./authenticate/login'));
home.use('/employees',require('./employees'));


module.exports = home;