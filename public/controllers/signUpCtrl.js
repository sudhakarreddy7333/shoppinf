app.controller('signUpCtrl',function($http,$location,$timeout){
    var vm = this;
    vm.userCreationSuccess = false;
    vm.postLogin = function(){
        $http.post('/api/Authenticate/signup',vm.user).then(function(res){
            if(res.data.status === 'success'){
                vm.userCreationSuccess = true;
            }
            else if(res.data.status === 'error'){
            }
        });
    };
});