var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log('server running at port', port);
});
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', function(req,res){
    res.send('Login successful, redirecting to homepage');
})