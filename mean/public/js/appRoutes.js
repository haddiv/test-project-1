angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
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

        .when('/form', {
            templateUrl: 'views/form.html',
            controller: 'NerdController'
            // controller: 'FormController'
        })
        .when('/category/category', {
            templateUrl: 'views/category/category.html',
            controller: 'CatergoryController'

        })
        .when('/news/categoryFrom', {
            templateUrl: 'views/categoryFrom.html',
            controller: 'CatergoryController'
        })
        .when('/nerds/form', {
            templateUrl: 'views/categoryFrom.html',
            controller: 'NerdController'

        })

        .when('/post/post', {
            templateUrl: 'views/post/post.html',
            controller: 'PostController'
        })
        .when('/post/post/postListView', {
            templateUrl: 'views/post/postListView.html',
            controller: 'PostController'
        })

        .otherwise({
            templateUrl: 'views/pageNotFound.html'
        });
    $locationProvider.html5Mode(true);

}]);