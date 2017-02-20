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
    
    if(req.body.username === 'sudhakar12' && req.body.password === 'Abc12'){
        next();
        res.send({
            status : 'success',
            description : null,
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