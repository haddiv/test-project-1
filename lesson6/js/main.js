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
    .when("/testimonials", {templateUrl: "partials/testimonials.html",  controller: "addTestimonials"})
    // Blog
    .when("/calculator", {templateUrl: "partials/calculator.html", controller: "calcCtrl"})
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/calculator.html", controller: "BlogCtrl"})

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
        $scope.showImg=true;
        $scope.showStar=true;
        $scope.showLines=true;
        $scope.userTestimonial = $scope.testimonial;
        $scope.userName = $scope.name ;
    };
        this.count1 = 0;
        this.count2 = 0;
        this.count3 = 0;
        this.count4 = 0;

});
app.controller("calcCtrl", function ($scope) {
    // show result when click on "=" button
    $scope.showValue =function () {
        $scope.screen = $scope.nine;

    }

    // show value
    $scope.showValue = function (btn) {
        if ($scope.output == "0" || $scope.newNumber) {
            $scope.output = btn;
            $scope.newNumber = false;
        } else {
            $scope.output += String(btn);
        }
        $scope.pendingValue = toNumber($scope.output);
    };

    $scope.result = function() {
        if ($scope.operator == '+') {
            return $scope.a + $scope.b;
        }
        if ($scope.operator == '-') {
            return $scope.a - $scope.b;
        }
        if ($scope.operator == '*') {
            return $scope.a * $scope.b;
        }
        if ($scope.operator == '/') {
            return $scope.a / $scope.b;
        }
    };
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
