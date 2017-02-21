var express = require('express');
var Router = express.Router();
Router.get('/', function(req,res,next){
    var variablesObj = {
        title : 'nodeJs',
        description : 'Welcome log in to continue!',
        displayerr : 'none',
        errorMsg : ''
    }; 
    res.render('login',variablesObj);
});

Router.post('/login', function(req,res,next){
    console.log(req.body);
    
    if(req.body.username === 'sudhakar12' && req.body.password === 'Abc12'){
        next();
        res.send({
            status : 'success',
            description : null,
        });
    }
    else if(req.body.username === '' && req.body.password === ''){
       var variablesObj = {
            title : 'nodeJs',
            description : 'Welcome log in to continue!',
            displayerr : 'block',
            errorMsg : 'Enter username and password'
        };
         res.send({
            status : 'error',
            description : 'Enter username and password',
        }); 
    }
     else if(req.body.username === 'sudhakar12' && req.body.password === ''){
       var variablesObj = {
            title : 'nodeJs',
            description : 'Welcome log in to continue!',
            displayerr : 'block',
            errorMsg : 'Enter username and password'
        };
         res.send({
            status : 'error',
            description : 'Enter password',
        }); 
    }
    else {
        var variablesObj = {
            title : 'nodeJs',
            description : 'Welcome log in to continue!',
            displayerr : 'block',
            errorMsg : 'Incorrect details'
        }; 
        res.send({
            status : 'error',
            description : 'Incorrect username/password',
        });  
    }
});

Router.get('/dashboard', function(req,res){
    var variablesObj = {
        message : "Welcome sudhakar"
    }; 
    res.render('home',variablesObj);
})
module.exports = Router;