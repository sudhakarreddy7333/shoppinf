var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username : {type : 'string', unique : true},
    password : {type : 'string'},
    email : {type : 'string', Default : null},
    createdOn : {type : Date, Default : Date.now()}
});

var User = mongoose.model('User', userSchema);

module.exports = User;