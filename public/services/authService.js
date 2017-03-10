app.factory('authService', function($q,$location,localStorageService){
    var user = {};
    var deferred = $q.defer();
    var loggedIn = false;
    user.setLogin = function(isLogin){
        loggedIn = isLogin;
    };
    user.addTokenInfo = function(token){
        localStorageService.set('authToken',token);
    };
    user.checkToken = function(){
        var authToken = localStorageService.get('authToken');
        if(authToken===null){
            $location.url('/login');
            deferred.reject('Invalid Token');
        }
        else{
            deferred.resolve();
        }
        return deferred.promise;
    };
    user.logout = function(){
        if (localStorageService.isSupported) {
            localStorageService.clearAll();
            $location.path('/login');
        }
    }
    return user;
});