// public/js/services/NerdService.js
angular.module('NewsService', []).factory('News', ['$http', function($http) {
    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/nerds');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/news/addNews', nerdData);

        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        }

        // call to UPDATE a nerd
        //update : function() {
        //  return $http.put('/api/nerds/');
        //}
    }

}]);