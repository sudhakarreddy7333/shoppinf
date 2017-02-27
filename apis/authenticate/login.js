var express = require('express');
var User = require('../../models/users');
var login = express();
//LoginUser is an API
login.post('/LoginUser', function(req,res,next){
    if(req.body.username !== undefined && req.body.password !== undefined){
        User.find({"username" : req.body.username, "password" : req.body.password }, function(err, data){
            if(err) {
                console.log('Error finding user', err);
            }
            if(data[0]!== undefined && data.length >= 0){
                res.send({
                    status : 'success',
                    description : null,
                });
            }
            else {
                res.send({
                    status : 'error',
                    description : 'Incorrect Username/Password'
                });

            }
        });
    }
    else {
        res.send({
            status : 'error',
            description : 'Enter Username/Password'
        })
    }

});

module.exports = login;