app.controller('dashboardCtrl',function(){
    var vm = this;
    
    vm.tabs = [
        {
            "tabUrl" : 'views/addEmployee.html',
            "tabName" : 'Add Employee'
        },
        {
            "tabUrl" : 'views/employeelist.html',
            "tabName" : 'Employees'
        }];
    vm.activeTab = vm.tabs[1].tabUrl;

    vm.onTabClick = function(tabUrl){
        vm.activeTab = tabUrl;
    }
    vm.isActive = function(tabUrl){
        return vm.activeTab === tabUrl;
    }
});