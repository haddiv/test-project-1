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
//calculator
function CalcCtrl($scope) {
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
    };

    $scope.operate = function (op) {
        console.log($scope.output);
        if ($scope.output && !$scope.inOperation) {
            $scope.num1 = $scope.output;
            $scope.output += op;
            $scope.inOperation = true;
        } else if ($scope.output.length > $scope.num1.length + 1) {
            $scope.output = eval($scope.output);
            $scope.output += op;
        }
        switch (op) {
            case "sin":
                $scope.output = parseInt($scope.output);
                $scope.output = Math.round(Math.sin($scope.output));
                console.log($scope.output);
                break;
            case "cos":
                $scope.output = parseInt($scope.output);
                $scope.output = Math.round(Math.cos($scope.output));
                console.log($scope.output);
                break;
            case "tan":
                $scope.output = parseInt($scope.output);
                $scope.output = Math.round(Math.tan($scope.output));
                console.log($scope.output);
                break;
            case "log":
                $scope.output = parseInt($scope.output);
                $scope.output = Math.log($scope.output);
                console.log($scope.output);
                break;
            case "sqrt":
                $scope.output = parseInt($scope.output);
                $scope.output = Math.sqrt($scope.output);
                console.log($scope.output);
                break;
            case "pow":
                $scope.output = parseInt($scope.output);
                $scope.output = Math.pow($scope.output, 2);
                console.log($scope.output);
                break;
            case "pow3":
                $scope.output = parseInt($scope.output);
                $scope.output = Math.pow($scope.output, 3);
                console.log($scope.output);
                break;
            case "exp":
                $scope.output = parseInt($scope.output);
                $scope.output = Math.exp($scope.output);
                console.log($scope.output);
                break;
        }
    };

    $scope.equal = function () {
        $scope.output = eval($scope.output);
        $scope.num1 = $scope.output;
    };
}
app.controller('CalcCtrl', CalcCtrl);