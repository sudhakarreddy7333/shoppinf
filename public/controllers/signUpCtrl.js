app.controller('signUpCtrl',function($http,$location,$timeout,$filter){
    var vm = this;
    vm.userCreationSuccess = false;
    vm.userExists = false;
    vm.newUser = {};
    vm.postLogin = function(){
        vm.newUser = angular.copy(vm.user);
        vm.newUser.username = $filter('lowercase')(vm.newUser.username);
        $http.post('/api/Authenticate/signup',vm.newUser).then(function(res){
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