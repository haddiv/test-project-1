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
        .when("/testimonials", {templateUrl: "partials/testimonials.html", controller: "PageCtrl"})
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

app.controller('testimonialsCtrl', function ($scope) {
    $scope.testimonials = [
        {
            avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg',
            name: 'Anna Deynah',
            profession: 'Web Designer',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eosid officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
            review: 'fa-star-half-full'
        },
        {
            avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg',
            name: 'John Doe',
            profession: 'Web Developer',
            quote: 'Ut enim ad minima veniam, quis nostrum exercitationem ullamcorporis suscipit laboriosam, nisi ut aliquid ex ea commodi.',
            review: 'fa-star'
        },
        {
            avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg',
            name: 'Maria Kate',
            profession: 'Photographer',
            quote: 'At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium voluptatum deleniti atque corrupti.',
            review: 'fa-star-o'
        }

    ];
});