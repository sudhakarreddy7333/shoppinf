var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username : {type : 'string', unique : true},
    password : {type : 'string'},
    email : {type : 'string'}
});

var User = mongoose.model('User', userSchema);

module.exports = User;