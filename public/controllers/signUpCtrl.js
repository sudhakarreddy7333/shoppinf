app.controller('signUpCtrl',function($http,$location,$timeout){
    var vm = this;
    vm.userCreationSuccess = false;
    vm.userExists = false;
    vm.postLogin = function(){
        $http.post('/api/Authenticate/signup',vm.user).then(function(res){
            if(res.data.status === 'success'){
                vm.userCreationSuccess = true;
                vm.username = res.data.username;
            }
            else if(res.data.status === 'UserExits'){
                vm.userExists = true;
            }
            else if(res.data.status === 'error'){
            }
        });
    };
});