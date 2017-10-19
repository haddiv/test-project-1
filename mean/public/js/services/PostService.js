
angular.module('PostService', []).factory('Post', ['$http', function($http) {
    return {
        get : function() {
            return $http.get('/api/post');
        },
        create : function(nerdData) {
            return $http.post('/api/post', nerdData);
        },
        delete : function(id) {
            return $http.delete('/api/post/' + id);
        },
        put: function (id) {
            return $http.put('/api/post/' + id);
        }
    }
}]);