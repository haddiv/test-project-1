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
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    .when("/testimonial", {templateUrl: "partials/testimonial.html", controller: "PageCtrl"})
    .when("/calculator", {templateUrl: "partials/calculator.html", controller: "calculatorController"})
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
app.controller('PageCtrl', ['$scope', 'testimonialStories', function ( $scope,testimonialStories) {
  console.log("Page Controller reporting for duty.");
  $scope.testimonialStories=testimonialStories;
  $scope.view = true;
  $scope.hidden = false;
  $scope.showForm = function(){
		$scope.view = false;
  $scope.hidden = true;
		}
  $scope.newTest = function(){
			$scope.newObj ={ 
			name:$scope.name + " " + $scope.surname,
			country:$scope.city +  "," +  $scope.country ,
			story:$scope.text,
			img:"images/profPic.png"
			}
			$scope.view = true;
			$scope.hidden = false;
			$scope.testimonialStories.push($scope.newObj);
			$scope.testimonialStories = $scope.testimonialStories.reverse();
			console.log($scope.newObj);
			console.log($scope.testimonialStories);
	  }
	  
	  
	  

  // Activates the Carousel
  $('.carousel').carousel({
        interval: 5000
    });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
}]);


app.controller('calculatorController',function ($scope) {
		$scope.inputNumbers= "";
		$scope.divsVal = function(item){
		
		console.log($scope.inputNumbers);
		$scope.inputNumbers += angular.element(item).text();
		console.log(angular.element(item).text())
		
		  }
		  
		  
		//clear all
        $scope.clearAll = function(){
			$scope.inputNumbers="";
			}		
			
		//backspace	
		$scope.backspace=function(){
		$scope.numbersInArray = $scope.inputNumbers.split("");			
		$scope.popNum = $scope.numbersInArray.pop();
		$scope.number = "";
			for(var i=0; i<$scope.numbersInArray.length;i++){
					$scope.number+= $scope.numbersInArray[i];
						}
		$scope.result = parseInt($scope.number);
		$scope.inputNumbers=$scope.number;
		console.log($scope.result);
		console.log($scope.inputNumbers);
		console.log($scope.number);
		
		
			
			}

})





//List of Custommers
app.service('testimonialStories',function(){
		return list = [ {	
			name:"Loren Robinson",
			country:"LA,USA",
			story:"Upgrade small business through ACME",
			img:"images/img1.jpg"
			
			},
			
			{
			name:"Mark Elthon",
			country:"LA,USA",
			story:"Upgrade small business through ACME",
			img:"images/img2.jpg"
			
			},
			{
			name:"Syu Tanq",
			country:"LA,USA",
			story:"Upgrade small business through ACME",
			img:"images/img3.jpg"
			
			}
		]
		
		
		})