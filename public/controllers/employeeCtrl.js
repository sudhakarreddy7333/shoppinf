app.controller('employeeCtrl', function($http,$rootScope){
    vm = this;
    vm.emp = {};
    vm.showEmpList = false;
    vm.calcAge = function(){
        var ageDifMs = Date.now() - vm.emp.dob.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        vm.emp.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    vm.addEmp = function(){
        vm.emp.username = $rootScope.username;
        
        $http.post('api/employees/add',vm.emp).then(function(res){
            if(res.data.status === 'success'){
                vm.emp = {};
                getEmployeesList();
            }
        });
    };
    
    var getEmployeesList = function(){
        $http.get('/api/employees/list/'+$rootScope.username).then(function(res){
            if(res.data.status === 'success'){
                vm.showEmpList = true;
                vm.showCreateEmp = true;
                vm.employeesList = res.data.Data;
            }
            else if(res.data.status === 'NoRecords'){
               vm.showEmpList = false;
            }
        });
        
    };
    getEmployeesList();
});
