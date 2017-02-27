var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username : {type : 'string', unique : true},
    password : {type : 'string'}
});

var User = mongoose.model('User', userSchema);

module.exports = User;