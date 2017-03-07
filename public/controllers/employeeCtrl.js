app.controller('employeeCtrl', function($http,genService){
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
                    getEmployeesList();
                }
            });
        }
        else if(vm.addUserBtn === 'Update'){
            vm.emp._id = vm.emp._id.toString();
            $http.post('api/employees/edit',vm.emp).then(function(res){
                if(res.data.status === 'success'){
                    vm.emp = {};
                    vm.addUserBtn = 'Add';
                    $('#editEmp').modal('hide');
                    getEmployeesList();
                }
            });
        }
    };

    var getEmployeesList = function(){
        $http.get('/api/employees/list').then(function(res){
            vm.showElist = true;
            if(res.data.status === 'success'){
                vm.showEmpList = true;
                vm.employeesList = res.data.Data;
            }
            else if(res.data.status === 'NoRecords'){
                vm.showEmpList = false;
            }
        });

    };
    vm.editEmployee = function(emp){
        vm.emp = {};
        vm.emp = angular.copy(emp);
        vm.emp.dob = new Date(vm.emp.dob); 
        vm.addUserBtn = 'Update';
        $('#editEmp').modal('show');
    };

    vm.deleteEmployee = function(id){
        $http.post('api/employees/delete',{"_id" : id}).then(function(res){
            if(res.data.status === 'success'){
                vm.emp = {};
                getEmployeesList();
            }
        }); 
    }
    getEmployeesList();
});
