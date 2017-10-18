angular.module('FromService', []).factory('Form', ['$http', function($http) {
    return {
        create : function(nerdData) {
            return $http.post('/api/form', nerdData);
        }
    }
}]);


