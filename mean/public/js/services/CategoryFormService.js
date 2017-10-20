angular.module('CategoryFormService', []).factory('Category', ['$http', function($http) {
    return {
        get : function() {
            return $http.get('/api/category');
        },
        create : function(catData) {
            return $http.post('/api/category', catData);
        },
        delete : function(id) {
            return $http.delete('/api/category/' + id);
        },
        put: function (id) {
            return $http.put('/api/category/' + id);
        }
    }
}]);
