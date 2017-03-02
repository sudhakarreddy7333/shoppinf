app.config(function($routeProvider){
   $routeProvider
   .when("/",{
       templateUrl : "views/login.html",
       controllerAs : "lc"
   })
   .when("/dashboard",{
       templateUrl : "views/home.html",
   })
   .when("/signup",{
       templateUrl : "views/signup.html"
   })
   .when("/employeesList",{
       templateUrl : "views/employeelist.html"
   })
});