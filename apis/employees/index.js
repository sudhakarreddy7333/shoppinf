var express = require('express');
var Employee = require('../../models/employees');
var emp = express();
emp.post('/add', function(req, res){
    var newEmpDet = {
        username : req.body.username,
        name : req.body.name,
        email : req.body.email,
        dept : req.body.dept,
        gender : req.body.gender,
        age : req.body.age,
        dob : req.body.dob,
        createdOn : new Date()
    };
    var newEmp = new Employee(newEmpDet);
    newEmp.save(newEmp, function(err, data){
        if(err){
            console.log('user cannot be saved',err);
            return "";
        }
        else {
            console.log('user saved');
            res.send({
                status : "success"
            });
        }
    })
    console.log(req.body);
});

emp.get('/list/:username', function(req,res){
    var username = req.params.username;

    // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
    Employee.find({ "username": username }, function (err, emp) {
        if (err) {
            console.log('Could not find Employees list' , err);
            return "";
        }
        if(emp.length >=1){
            res.send({
                status : 'success',
                Data : emp
            });
        }
        else {
            res.send({
                status : 'NoRecords',
                Data : emp
            }); 
        }
    });
});
module.exports = emp;