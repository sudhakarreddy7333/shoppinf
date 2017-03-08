app.factory('empService', function($http){
    var empService = {};
    empService.calculateAge = function(empDob){
        if(empDob){
            var validDobErr = true;
            var currDate = new Date();
            var ageDifMs = Date.now() - empDob.getTime();
            var ageDate = new Date(ageDifMs);
            var empAge = Math.abs(ageDate.getUTCFullYear() - 1970);
            if(empDob.getFullYear() < 1800 || empDob.getFullYear() > currDate.getFullYear() || empAge.age <=12){
                empAge = "";
                validDobErr = true;
            }
            if(empAge >= 12){
                validDobErr = false;
            }
            return {
                "validDobErr" : validDobErr,
                "empAge" : empAge
            }
        }
    };
    empService.addEmp = function(action,empDet){
        if(action === 'Add'){
            $http.post('api/employees/add',empDet).then(function(res){
                if(res.data.status === 'success'){
                    return {
                        "action" : action,
                        "status" : res.data.status
                    }
                }
            });
        }
        else if(action === 'Update'){
            empDet._id = empDet._id.toString();
            $http.post('api/employees/edit',empDet).then(function(res){
                if(res.data.status === 'success'){
                    action = 'Add';
                    $('#editEmp').modal('hide');
                    return {
                        "action" : action,
                        "status" : res.data.status
                    }
                }
            });
        }
        return {
            "action" : action,
            "status" : "success"
        }
    }
    return empService;
});