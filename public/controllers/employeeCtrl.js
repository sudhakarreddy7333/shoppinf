app.controller('employeeCtrl', function($http,genService,$scope,empService,$filter){
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
                vm.addUserBtn = response.action;
                if(vm.addUserBtn === 'Update'){
                    getEmployeesList();  
                }
            };
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
        vm.emp.dob = $filter('date')(vm.emp.dob, 'dd-MM-yyyy'); 
        vm.addUserBtn = 'Update';
        $('#editEmp').modal('show');
        vm.calcAge();
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
