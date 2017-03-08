app.controller('addEmployeeCtrl', function($http,$scope,empService){
    vm = this;
    vm.emp = {};
    vm.addUserBtn = 'Add';
    vm.validDobErr = false;
    vm.calcAge = function(){
        var response = empService.calculateAge(vm.emp.dob);
        vm.validDobErr = response.validDobErr;
        vm.emp.age = response.empAge;
    };
    vm.addEmp = function(){
        if(!vm.validDobErr){
            var response = empService.addEmp(vm.addUserBtn,vm.emp);
            if(response.status === 'success'){
                vm.emp = {};
                $scope.addEmpForm.$setPristine();
            }
        }
    };
});