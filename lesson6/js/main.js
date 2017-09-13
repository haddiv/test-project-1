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
    $scope.showHistorySt=function () {
        $scope.showHistoryWindow1=!$scope.showHistoryWindow1;
    };
    $scope.showHistorySyn=function () {
        $scope.showHistoryWindow2=!$scope.showHistoryWindow2;
    };

    $scope.output = "0";
    $scope.result = 0;

    $scope.checkInput = function(num) {
        var tmp = true;
        if($scope.result != 0) {
            $scope.result = 0;
            $scope.output = "0";
            tmp = true;
        }
        return tmp;
    };
    $scope.addArr=function () {
        var array=[];
        array.push($scope.output+$scope.result);
        $scope.output=$scope.array;

    };

    $scope.operate = function(op) {
        if($scope.checkInput(op)) {
            $scope.output = $scope.output + op;
        }
    };
    $scope.prosent=function (num, num2) {

    };
    $scope.clean=function () {
            $scope.result = 0;
            $scope.output = "0";
    };
    $scope.cleanLastElement=function () {
        var array=[];
        array.push($scope.output);
        console.log(array);
    };
    $scope.root=function () {
        $scope.num=$scope.output;
        $scope.output = Math.sqrt($scope.num);
        $scope.result = eval($scope.output);
        $scope.output = $scope.result;
    };
    $scope.plusAndMnus=function () {
        $scope.num=$scope.output;
        $scope.output = -$scope.output;
    };
    $scope.revertNum=function () {
        $scope.num=$scope.output;
        $scope.output=1/($scope.num);
        $scope.result = eval($scope.output);
        $scope.output = $scope.result;
    };
    $scope.sqrNum=function () {
        $scope.num=$scope.output;
        $scope.output=$scope.num * $scope.num;
        $scope.result = eval($scope.output);
        $scope.output = $scope.result;
    };
    $scope.tensq=function () {
        $scope.num=$scope.output;
        $scope.output=Math.pow(10, $scope.num);
        $scope.result = eval($scope.output);
        $scope.output = $scope.result;
    };
    $scope.MathSin=function () {
        $scope.num=$scope.output;
        $scope.output=Math.sin($scope.num);
        $scope.result = eval($scope.output);
        $scope.output = $scope.result;
    };
    $scope.MathCos=function () {
        $scope.num=$scope.output;
        $scope.output=Math.cos($scope.num);
        $scope.result = eval($scope.output);
        $scope.output = $scope.result;
    };
    $scope.MathTan=function () {
        $scope.num=$scope.output;
        $scope.output=Math.tan($scope.num);
        $scope.result = eval($scope.output);
        $scope.output = $scope.result;
    };
    $scope.Mathlog=function () {
        $scope.num=$scope.output;
        $scope.output=Math.log($scope.num);
        $scope.result = eval($scope.output);
        $scope.output = $scope.result;
    };
    $scope.desOutput=0;
    $scope.toMakeDecimal=function () {
        $scope.desOutput=$scope.output.toString(2);
        console.log($scope.desOutput);

    };

    $scope.press = function(num) {
        if($scope.checkInput(num)) {
                if (angular.equals($scope.output, "0")) {
                    $scope.output = "";
                    $scope.output += num;
                }else if (angular.equals(".", $scope.output)) {
                    $scope.output = "0.";
                    $scope.output += num;
                } else if (angular.equals("%", $scope.output)) {
                    $scope.output = ($scope.output*num)/100;
                    $scope.output += num;
                }
                else {
                    $scope.output += num;
                }
        }

        $scope.equal = function() {
                $scope.result = eval($scope.output);
                $scope.output = $scope.result;

        }
    };
    $scope.standCalc = true;
    $scope.showCalcSyintific =function () {
        $scope.standCalc = false;
        $scope.sinCalc = true;
        $scope.progCalc = false;
        $scope.settings = false;
    };
    $scope.showCalcStandart=function () {
        $scope.standCalc = true;
        $scope.sinCalc = false;
        $scope.progCalc = false;
        $scope.settings = false;
    };
    $scope.showCalcProg=function () {
        $scope.standCalc = false;
        $scope.sinCalc = false;
        $scope.settings = false;
        $scope.progCalc = true;
    };
    $scope.showSettings=function () {
        $scope.standCalc = false;
        $scope.sinCalc = false;
        $scope.progCalc = false;
        $scope.settings = true;
    }
    $scope.changeColorClass=function () {
        $scope.backgroundColor={
            'background-color':"#1f1f1f"
        };
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
