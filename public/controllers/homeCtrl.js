app.controller('homeCtrl', function(genService,$scope,authService,$location,localStorageService){
    var vm = this;
    $('.dropdown-toggle').dropdown();
    if(localStorageService.get("empdirusername")){
        vm.showSignedUser = true;
        vm.username = localStorageService.get("empdirusername");
    }
    else {
        vm.showSignedUser = false;
    }
    $scope.$on('usernameUpdated', function (event, data) {
        vm.username = data;
        vm.showSignedUser = true;
        localStorageService.set("empdirusername", vm.username);
    });
    vm.logoutUser = function(){
        authService.logout();
        localStorageService.clear();
        vm.showSignedUser = false;
    }
});