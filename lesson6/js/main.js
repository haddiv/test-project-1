/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
    'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
        .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        // Pages
        .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
        .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
        .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
        .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
        .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
        // testimonials
        .when("/testimonials", {templateUrl: "partials/testimonials.html", controller: "addTestimonials"})
        .when("/calculator", {templateUrl: "partials/calculator.html", controller: "PageCtrl"})
        // Blog
        .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
        .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})


        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
    console.log("Blog Controller reporting for duty.");
});
app.controller('addTestimonials', function ($scope) {
    $scope.addFunction = function () {
        $scope.showImg = true;
        $scope.showStar = true;
        $scope.showLines = true;
        $scope.userTestimonial = $scope.testimonial;
        $scope.userName = $scope.name;
    };
    this.count1 = 0;
    this.count2 = 0;
    this.count3 = 0;
    this.count4 = 0;

});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");

    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    })
});

///////////////


app.controller('MyCtrl', MyCtrl);

function MyCtrl($scope) {
    $scope.output = "0";
    $scope.inOperation = false;
    $scope.num1 = 0;
    $scope.updateOutput = function (btn) {
        if ($scope.newNumber) {
            $scope.output = 0;
        }
        if ($scope.output == "0" || $scope.newNumber) {
            $scope.output = btn;
            $scope.newNumber = false;
        } else {
            $scope.output += String(btn);
        }
    }
    $scope.operate = function (op) {
        if ($scope.output || !$scope.inOperation) {
            $scope.inOperation = false;
            $scope.num1 = $scope.output;
            $scope.output += op;
            $scope.inOperation = true;
        } else if ($scope.output.length > $scope.num1.length + 1) {
            $scope.output = eval($scope.output);
            $scope.output += op;
        }
    }
    $scope.equal = function () {
        if ($scope.output.length > $scope.num1.length + 1) {
            $scope.output = eval($scope.output);
            $scope.num1 = $scope.output;
        } else {
            $scope.output = $scope.num1;
        }
    }
}










