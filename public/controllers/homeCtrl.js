app.controller('homeCtrl', function(genService,$scope,authService,$location){
    var vm = this;
    $('.dropdown-toggle').dropdown();
    vm.showSignedUser = false;
    $scope.$on('usernameUpdated', function (event, data) {
        vm.username = data;
        vm.showSignedUser = true;
    });
    vm.logoutUser = function(){
        authService.setLogin('false');
        authService.checkToken();
        vm.showSignedUser = false;
    }
});