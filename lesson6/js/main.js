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
		//menu
     $scope.menuList = ["Standart","Scientific","Programmer","Settings"];
	 
		$scope.firstStage= "";
		$scope.sign = "";
		$scope.secondStage="";
		$scope.firstNum=0;
		$scope.secondNum=0;
		$scope.result=0;
		$scope.show=false;         
        $scope.resNum= 0; 
		
		$scope.getNum = function(item){
		         	 if($scope.secondStage!=""){
				     
					 $scope.firstStage +=angular.element(item).text();
					 console.log($scope.firstStage);
				     $scope.firstNum =Number($scope.firstStage);
					 console.log($scope.firstNum);
				}
		else{
			$scope.firstStage += angular.element(item).text();
			$scope.firstNum = Number($scope.firstStage);
			console.log(typeof $scope.firstNum);
			console.log($scope.firstNum);
			//$scope.secondNum = Number(angular.element(item).text());
			}
		
		}
		
		
		$scope.divsVal = function(item) {
                $scope.show=true; 
				
				$scope.sign = angular.element(item).text();
				if($scope.firstStage==""){
					$scope.secondNum =0;
					//$scope.firstStage = $scope.firstNum;
					$scope.secondStage = 0 + $scope.sign;
					
					}
				else{
				$scope.firstStage="";
				$scope.secondNum=$scope.firstNum;
				$scope.secondStage = $scope.sign + $scope.firstNum;
				console.log($scope.secondStage);
				console.log($scope.secondNum);
				
				
						
					}
           }
			
			$scope.equal=function(){
			switch($scope.sign){
				case "+":$scope.result=$scope.firstNum + $scope.secondNum; 
							break;
				case "/":$scope.result=$scope.firstNum / $scope.secondNum; 
							break;
				case "*":$scope.result=$scope.firstNum * $scope.secondNum; 
							break;	
				case "-":$scope.result=$scope.firstNum - $scope.secondNum; 
							break;	
				case "%":$scope.result=($scope.secondNum * 100)/$scope.firstNum; 
							break;	
				}
				if($scope.result<0){
					$scope.result = Math.abs($scope.result);
					$scope.firstStage= $scope.result+ "-";
					}
			
					else{
						$scope.firstStage=$scope.result;
					}
					$scope.show=false; 
					$scope.secondStage="";
					
					}
					
       //Divison on x     
       $scope.xDivide  = function(){
			if($scope.firstStage==""){
			   $scope.show=true;
			   $scope.secondStage="(0) reciproc ";
			   $scope.firstStage="division on 0 is impossible";
			   
			}
			else{
				$scope.show=true;
			    $scope.firstStage=1/$scope.firstNum;				
			    $scope.secondStage="("+$scope.firstNum+")"+"reciproc";
				}
			}

		//sqrt
		$scope.sqrt = function(){
				if($scope.firstStage==""){
			   $scope.show=true;
			   $scope.secondStage="(0) sqrt";
			   $scope.firstStage=0;
			   
			}
			else{
				$scope.show=true;
			    $scope.firstStage=Math.sqrt($scope.firstNum);				
			    $scope.secondStage="("+$scope.firstNum+ ")"+"sqrt";
				}
			}
			
			//dot
		$scope.dot = function(){
				if($scope.firstStage==""){
			  
			   $scope.firstStage= 0+"." ;
			   
			   
			}
			else{
				$scope.show=true;
			    $scope.firstStage=$scope.firstStage + ".";				
			    
				}
			}
		  
		  
		  //reverse
		$scope.reverseNum = function(){
		       	if($scope.firstStage==""){
			  
			   $scope.firstStage= 0;
			   
			   
			}
			else{
			
			if($scope.firstNum<0){
			$scope.firstNum *= -1;
					$scope.firstStage = $scope.firstNum;
					}
				
			    else{
				$scope.firstNum *= -1;
				$scope.firstStage = $scope.firstStage + "-" ;
			    
					}
			    
				}
			}
		  
		  
		 //pow
		 
           $scope.pow= function(){
				if($scope.firstStage==""){
			   $scope.show=true;
			   $scope.secondStage=0;
			   $scope.firstStage=0;
			   
			}
			else{
				$scope.show=true;
			    $scope.secondStage=$scope.firstNum * $scope.firstNum;				
			   
				}
			}
  
		 		 
		//clear all
        $scope.clearAll = function(){
			$scope.firstStage="";
			$scope.secondStage="";
			$scope.show=false;
			$scope.firstNum=0;
			$scope.secondNum=0;
			}	
    	//clear	
        $scope.clear = function(){
			$scope.firstStage="";
			
			}			
			
		//backspace	
		$scope.backspace=function(){
		$scope.numbersInArray = $scope.firstStage.split("");
		$scope.popNum = $scope.numbersInArray.pop();
		$scope.number = "";
			for(var i=0; i<$scope.numbersInArray.length;i++){
					$scope.number+= $scope.numbersInArray[i];
						}
		$scope.result = parseInt($scope.number);
		$scope.firstStage=$scope.number;
		console.log($scope.result);
		console.log($scope.firstStage);
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