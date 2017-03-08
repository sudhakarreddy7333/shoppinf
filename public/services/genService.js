app.factory('genService', function(){
    var genService = {};
    var username = "";
    genService.setUsername = function(user){
        username = user;
    };
    genService.getUsername = function(){
        if(username === "" || username === null || username === undefined){
            return "";
        }
        else {
            return username;
        }
    };
    return genService;
});