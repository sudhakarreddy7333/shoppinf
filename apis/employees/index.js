var express = require('express');
var mongoose = require('mongoose');
var Employee = require('../../models/employees');
var Token = require('../../models/webtoken');
var emp = express();

emp.post('/add',Token.verifyToken, function(req, res){
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

emp.post('/edit',Token.verifyToken, function(req,res){
    console.log('Edit Employee');
    var newEmpDet = {
        username : req.body.username,
        name : req.body.name,
        email : req.body.email,
        dept : req.body.dept,
        gender : req.body.gender,
        age : req.body.age,
        dob : req.body.dob
    };
    console.log(req.body._id);
    Employee.update({ "_id": mongoose.Types.ObjectId(req.body._id)}, newEmpDet, function (err, emp) {
        if (err) {
            console.log('Could not find Employee' , err);
            return "";
        }
        console.log('Editing emp');

        res.send({
            status : 'success',
            Data : emp
        });

    });
});

emp.post('/delete',Token.verifyToken, function(req,res){
    console.log('Delete Employee');
    Employee.remove({ _id: req.body._id }, function(err,emp) {
        if (err) {
            console.log('Could not delete Employee' , err);
            return "";
        }
        else {
            console.log('Employee Deleted');
            res.send({
                status : 'success',
                Data : emp
            });
        }
    });
});


emp.get('/list', Token.verifyToken, function(req,res){ 
    var username = req.body.username;
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