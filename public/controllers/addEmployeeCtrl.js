app.controller('addEmployeeCtrl', function($http){
    vm = this;
    vm.emp = {};
    vm.addUserBtn = 'Add';
    vm.calcAge = function(){
        var ageDifMs = Date.now() - vm.emp.dob.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        vm.emp.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    vm.addEmp = function(){
        if(vm.addUserBtn === 'Add'){
            $http.post('api/employees/add',vm.emp).then(function(res){
                if(res.data.status === 'success'){
                    vm.emp = {};
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