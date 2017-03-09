app.controller('dashboardCtrl',function(){
    var vm = this;
    vm.tabs = [
        {
            "tabUrl" : 'views/employeelist.html',
            "tabName" : 'Employees'
        },
        {
            "tabUrl" : 'views/addEmployee.html',
            "tabName" : 'Add Employee'
        }
    ];
    vm.activeTab = vm.tabs[0].tabUrl;

    vm.onTabClick = function(tabUrl){
        vm.activeTab = tabUrl;
    }
    vm.isActive = function(tabUrl){
        return vm.activeTab === tabUrl;
    }
});