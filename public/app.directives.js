app.directive('comparePwd',function(){
    return {
        require : 'ngModel',
        scope : {
            otherModelVal : '=comparePwd'
        },
        link : function(scope, element, attributes, ngModel){
            console.log(scope.otherModelVal);
            ngModel.$validators.checkingPwdEquality = function(modelval){
                return modelval == scope.otherModelVal;
            };
            scope.$watch("otherModelVal", function() {
                ngModel.$validate();
            });
        }
    }
});