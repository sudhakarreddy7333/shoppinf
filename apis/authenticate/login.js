var express = require('express');
var bcrypt = require('bcrypt');
var User = require('../../models/users');
var authenticate = express();
//LoginUser is an API
authenticate.post('/LoginUser', function(req,res,next){
    if(req.body.username !== undefined && req.body.password !== undefined){
        User.find({"username" : req.body.username}, function(err, data){
            if(err) {
                console.log('Error finding user', err);
            }
            if(data[0]!== undefined && data.length >= 0){
                bcrypt.compare(req.body.password, data[0].password, function(err, response) {
                    if(response === true){
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
                });
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

authenticate.post('/signup',function(req,res){
    //hashing password and storing in db
    var saltRounds = 10;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            if(err){
                console.log('cannot hash password', err);
            }
            req.body.password = hash;
            console.log('Hashed password',req.body.password);
            var newUserDetails = {
                "username" : req.body.username, 
                "password" : req.body.password, 
                "email" : req.body.email,
                "createdOn" : Date.now()
            };
            var newUser = new User(newUserDetails);
            newUser.save(function(err){
                if(err){
                    console.log('User cannot be created', err);
                    res.send({
                        status : 'UserExits'
                    })
                }
                else {
                    console.log('New User has been added successfully');
                    res.send({
                        status : 'success',
                        username : req.body.username
                    });
                }
            });
        });
    });
});

module.exports = authenticate;