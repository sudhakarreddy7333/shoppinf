app.controller('addEmployeeCtrl', function($http,$scope){
    vm = this;
    vm.emp = {};
    vm.addUserBtn = 'Add';
    vm.validDobErr = false;
    vm.calcAge = function(){
        if(vm.emp.dob){
            vm.validDobErr = true;
            var currDate = new Date();
            var ageDifMs = Date.now() - vm.emp.dob.getTime();
            var ageDate = new Date(ageDifMs);
            vm.emp.age = Math.abs(ageDate.getUTCFullYear() - 1970);
            if(vm.emp.dob.getFullYear() < 1800 || vm.emp.dob.getFullYear() > currDate.getFullYear() || vm.emp.age <=12){
                vm.emp.age = "";
                vm.validDobErr = true;
            }
            if(vm.emp.age >= 12){
                vm.validDobErr = false;
            }
        }
    };
    vm.addEmp = function(){
        if(vm.addUserBtn === 'Add'){
            $http.post('api/employees/add',vm.emp).then(function(res){
                if(res.data.status === 'success'){
                    vm.emp = {};
                    $scope.addEmpForm.$setPristine();
                }
            });
        }
        else if(vm.addUserBtn === 'Update'){
            vm.addUserBtn = 'Update';
            vm.emp._id = vm.emp._id.toString();
            $http.post('api/employees/edit',vm.emp).then(function(res){
                if(res.data.status === 'success'){
                    vm.emp = {};
                    vm.addUserBtn = 'Add';
                    $('#editEmp').modal('hide');
                }
            });
        }
    };
});