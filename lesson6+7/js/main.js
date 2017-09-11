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
    .when("/calculator", {templateUrl: "partials/calculator.html", controller: "calcCtrl"})
    // Blog
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


// Calculator


app.controller("calcCtrl", function ($scope) {
    $scope.output = "";
    $scope.result = 0;

    $scope.checkInput = function(num) {
        var tmp = true;
        if($scope.result != 0) {
            $scope.result = 0;
            $scope.output = "0";
            tmp = true;
        }
        return tmp;
    }

    $scope.operate = function(op) {
        if($scope.checkInput(op)) {
            $scope.output = $scope.output + op;
        }
    }
    $scope.clean=function () {
        if($scope.checkInput()) {
            $scope.output = "0";
        }

    }
    $scope.backspace = function () {
        var numbers = $scope.output.split("");

        for(var i=0; i<numbers.length;i++){
            $scope.number+= $scope.output[i];
        }
        $scope.result = parseInt($scope.number);
        $scope.inputNumbers=$scope.number;
    }

    $scope.press = function(num) {
        if($scope.checkInput(num)) {
                if (angular.equals($scope.output, "0")) {
                    $scope.output = "";
                    $scope.output += num;
                } else if (angular.equals(".", $scope.output)){
                    $scope.output = "0.";
                    $scope.output += num;
                }else if (angular.equals("%", $scope.output)) {
                    $scope.output = ($scope.output*num)/100;
                    $scope.output += num;
                } else {
                    $scope.output += num;
                }
        }

        $scope.equal = function() {
                $scope.result = eval($scope.output);
                $scope.output = $scope.result;

        }
    }
    
    $scope.root=function () {
        $scope.num=$scope.output;
        $scope.output = Math.sqrt($scope.num);
        $scope.result = eval($scope.output);
        $scope.output = $scope.result;
    }
    
    $scope.revertNum=function () {
        $scope.num=$scope.output;
        $scope.output=1/($scope.num);
        $scope.result = eval($scope.output);
        $scope.output = $scope.result;
        
    }
    
    $scope.plusMinus=function () {
        $scope.num=$scope.output;
        $scope.output = -$scope.output;
    }
    
    $scope.standCalc = true;
    $scope.showCalcSyintific =function () {
        $scope.standCalc = false;
        $scope.sinCalc = true;
    }
    $scope.showCalcStandart=function () {
        $scope.standCalc = true;
        $scope.sinCalc = false;
    }
    
    $scope.delete = function(){
        $scope.output = $scope.output.slice(0,-1);
    }
    
    
});










/*  app.service('MathService', function(){
    this.multiply = function(a, b) {
        return a * b; 
    }
});

app.service('CalculatorService', function(MathService){
    this.square = function(a) { 
        return MathService.multiply(a,a); 
    }
});

app.controller('ctrl', function($scope, CalculatorService) {

    $scope.doSquare = function() {
        $scope.output = CalculatorService.square($scope.number);
    }

});   */






















