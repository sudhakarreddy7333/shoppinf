app.factory('genService', function(){
    var genService = {};
    var username;
    genService.setUsername =  function(user){
        username = user;
    };
    genService.getUsername =  function(){
       return username;
    };
    return genService;
})