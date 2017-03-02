var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
    username : {type : 'string', required : true},
    name : {type : 'string', required : true},
    email : {type : 'string', required : true},
    dept : {type : 'string', default : null},
    gender : {type : 'string'},
    dob : {type : 'Date'},
    age : {type : 'Number'},
    createdOn : {type : 'Date', default : null}

});

var Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;