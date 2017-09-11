
	var filterApp=angular.module("filter2module",[]);


filterApp.controller("myFilter",function($scope){
  $scope.filt = {}
  $scope.filterBy = '$'
var employees= [
{name:"Aram Sahakyan",city:"Gyumri",company:"Tumo Gyumri"},
{name:"Tigran Sargsyan",city:"Gyumri",company:"Instigate"},
{name:"David Tovmasyan",city:"Yerevan",company:"Microsoft"},
{name:"Lusine Karapetyan",city:"Vanadzor",company:"VTC"},
{name:"Gohar Davtyan",city:"Gyumri",company:"Instigate"},
{name:"Artur Petrosyan",city:"Yerevan",company:"Microsoft"},
{name:"Liza Petrosyan",city:"Yerevan",company:"Tumo"},
{name:"Levon Aleksanyan",city:"Vanadzor",company:"VTC"}
];
$scope.employees=employees;

});
  var filterApp=angular.module("filter2module",[]);

  filterApp.controller("myFilter",[$scope,function($scope){
		
			  $scope.employees= [
			  {name:"Aram",gender:"male",birthdate:1991,salary:500},
			  {name:"Tigran",gender:"male",birthdate:1990,salary:1500},
			  {name:"David",gender:"male",birthdate:1987,salary:1000},
			  {name:"Lusine",gender:"female",birthdate:1985,salary:500},
			  {name:"Gohar",gender:"female",birthdate:1994,salary:750},
			  {name:"Artur",gender:"male",birthdate:1980,salary:650},
			  {name:"Liza",gender:"female",birthdate:1999,salary:180},
			  {name:"Levon",gender:"male",birthdate:1997,salary:450}
			   ];
			   }]);
 
	
			   
			   