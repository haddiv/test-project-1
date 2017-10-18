angular.module('GeekService', []).factory('Geek', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/geeks');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(geekData) {
            return $http.post('/api/geeks', geekData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/geeks/' + id);
        }
    }

}]);
