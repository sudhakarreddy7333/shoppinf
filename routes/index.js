var express = require('express');
var home = express();

//LoginUser is an API
home.post('/LoginUser', function(req,res,next){
    console.log(req.body);
    
    if(req.body.username === 'sudhakar12' && req.body.password === 'Abc12'){
        next();
        res.send({
            status : 'success',
            description : null,
        });
    }
    else if(req.body.username === '' && req.body.password === ''){
         res.send({
            status : 'error',
            description : 'Enter username and password',
        }); 
    }
     else if(req.body.username === 'sudhakar12' && req.body.password === ''){
         res.send({
            status : 'error',
            description : 'Enter password',
        }); 
    }
    else {
        res.send({
            status : 'error',
            description : 'Incorrect Username/Password',
        });  
    }
});

home.get('/dashboard', function(req,res){
    res.send('Hello');
})
module.exports = home;