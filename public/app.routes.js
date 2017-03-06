app.config(['$routeProvider','$httpProvider','localStorageServiceProvider',function($routeProvider, $httpProvider,localStorageServiceProvider){
    localStorageServiceProvider.setStorageType('sessionStorage');
    $httpProvider.interceptors.push('authenticationInceptors');
    $routeProvider
        .when("/login",{
        templateUrl : "views/login.html",
        controllerAs : "lc"
    })
        .when("/",{
        templateUrl : "views/dashboard.html",
        resolve : {
            load : function(authService){
                authService.checkToken();
            }
        }
    })
        .when("/signup",{
        templateUrl : "views/signup.html"
    })
        .when("/employeesList",{
        templateUrl : "views/employeelist.html",
        resolve : {
            load : function(authService){
                authService.checkToken();
            }
        }
    })
        .otherwise(
        {
            redirectTo:'/login'
        }
    );
}]);