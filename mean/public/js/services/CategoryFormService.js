angular.module('CategoryFormService', []).factory('Category', ['$http', function($http) {
    return {
        get : function() {
            return $http.get('/api/news');
        },
        create : function(catData) {
            return $http.post('/api/news', catData);
        },
        delete : function(id) {
            return $http.delete('/api/news/' + id);
        },
        put: function (id) {
            return $http.put('/api/news/' + id);
        }
    }
}]);
