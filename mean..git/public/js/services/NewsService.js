// public/js/services/NerdService.js
angular.module('NewsService', []).factory('News', ['$http', function($http) {

    return {
        // call to get all nerds
        get: function () {
            var a = $http.get('/api/news');
            return a;
            console.log(a);
        },


        create : function(nerdData) {
            return $http.post('/api/news', nerdData);

        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/news/' + id);
        },

        upd : function(id) {
            return $http.get('/api/news/'+ id);

        },

        update : function(use,id) {
            return $http.put('/api/news/'+ id,use);
        }

    }
}]);