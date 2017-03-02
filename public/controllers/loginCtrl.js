app.controller('loginCtrl',function($http,$location,$timeout,$rootScope){
    var vm = this;
    vm.showErr = false;
    vm.showServerMesg = false;
    
    vm.postLogin = function(){
        $http.post('/api/Authenticate/LoginUser',vm.user).then(function(res){
            if(res.data.status === 'success'){
                $location.path('/employeesList');
                $rootScope.username = vm.user.username;
            }
            else if(res.data.status === 'error'){
                vm.showServerMesg = true;
                vm.serMsg = res.data.description;
                $timeout(function(){
                vm.showServerMesg = false;
                },2000);
            }
        });
    };
});