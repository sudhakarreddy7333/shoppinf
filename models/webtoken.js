var jwt = require('jsonwebtoken');
var token = {};
var newToken = "";
token.createToken = function(userobj){
    console.log('Creating Token');
    newToken = jwt.sign({
        exp: Date.now() + (60*30*1000), //expires after 30 mins
        data: userobj
    }, 'asecretwebtoken');
    return newToken;
};

token.verifyToken = function(req,res,next){
    var token = req.headers["authorization"];
    if(token){
        var status = jwt.verify(token, 'asecretwebtoken');
        //status exp- token expiry time, data, iat -token creation time
        if(status.exp <= Date.now()){
            res.end('TokenExpired', 400);
        }
        else {
            req.body.username = status.data.username;
            next();
            return status.data;
        }
    }
    else {
        res.end('TokenNotFound', 400);
    }
};

module.exports = token;

