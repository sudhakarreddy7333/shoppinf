var express = require('express');
var User = require('../../models/users');
var login = express();
//LoginUser is an API
login.post('/LoginUser', function(req,res,next){
    if(req.body.username !== undefined && req.body.password !== undefined){
        User.find({"username" : req.body.username}, function(err, data){
            if(err) {
                console.log('Error finding user', err);
            }
            if(data[0]!== undefined && data.length >= 0){
                if(data[0].password === req.body.password){
                    res.send({
                        status : 'success',
                        description : null,
                    });
                }
                else {
                    res.send({
                        status : 'error',
                        description : 'Incorrect Password'
                    });
                }
            }
            else {
                res.send({
                    status : 'error',
                    description : 'User does not exist'
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

login.post('/signup',function(req,res){
    var newUser = new User({"username" : req.body.username, "password" : req.body.password, "email" : req.body.email});
    newUser.save(function(err){
        if(err){
            console.log('User cannot be created', err);
        }
        console.log('saved');
        res.send({
            status : 'success',
            description : null
        })
    })
})

module.exports = login;