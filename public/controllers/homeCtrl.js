app.controller('homeCtrl', function(genService,$scope){
    var vm = this;
    vm.showSignedUser = false;
    $scope.$on('usernameUpdated', function (event, data) {
        vm.username = data;
        vm.showSignedUser = true;
    });
});