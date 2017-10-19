angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {
    return {
        get : function() {
            return $http.get('/api/nerds');
        },
        create : function(nerdData) {
            return $http.post('/api/form', nerdData);
        },
        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        },
        put: function (id) {
            return $http.put('/api/nerds/' + id);
        }
    }
}]);