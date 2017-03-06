/*
*This factory is used to pass token in each http call to the server through config.headers.Authorization = "token value"
We are adding token in headers for each http call
*/
app.factory('authenticationInceptors', function(localStorageService){
    return {
        request : function(config){
            config.headers = config.headers || {};

            if (localStorageService.get('authToken')) {
                config.headers.Authorization = localStorageService.get('authToken');                
            } 
            return config;
        },
        response: function (response) {
            if (response.status === 401 ) {
            }
            return response || $q.when(response);
        }
    }

});