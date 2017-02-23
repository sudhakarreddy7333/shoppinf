app.controller('loginCtrl',function($http,$location,$timeout){
    var vm = this;
    vm.showErr = false;
    vm.showServerMesg = false;
    $http.get('/api/getEnv').then(function(res){
        console.log(res);
    });
        
    vm.postLogin = function(){
        $http.post('/api/Authenticate/LoginUser',vm.user).then(function(res){
            if(res.data.status === 'success'){
                $location.path('/dashboard');
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