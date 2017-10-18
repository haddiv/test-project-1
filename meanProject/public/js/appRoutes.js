// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        })
		
		// geek page that will use the NerdController
        .when('/geek', {
            templateUrl: 'views/geek.html',
            controller: 'GeekController'
        })
		
		.otherwise({
            templateUrl: 'views/error.html',
            
        })
		;

    $locationProvider.html5Mode(true);

}]);