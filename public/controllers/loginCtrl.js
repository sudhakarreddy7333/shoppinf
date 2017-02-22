app.controller('loginCtrl',function($http,$location){
    var vm = this;
    vm.showErr = false;
    vm.showServerMesg = false;
    vm.postLogin = function(){
        $http.post('/api/LoginUser',vm.user).then(function(res){
            if(res.data.status === 'success'){
                $location.path('/dashboard');
            }
            else if(res.data.status === 'error'){
                vm.showServerMesg = true;
                vm.serMsg = res.data.description;
            }
        });
    };
});