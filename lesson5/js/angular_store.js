	var app = angular.module('store', []);
	
	app.controller("storeController", function($scope){
	

	    
		$scope.books = [ 
		{
			name : "Harry Potter and the Philosopher`s Stone",
			price: "2.50",
			description : "",
			author : "J.K Rowling",
			image :  "../img/philosophers.jpg"
		},
    {
			name : "Catcher in the Rye",
			price: "5.90",
			description : "",
			author : "J.D Salinger",
			image :  "../img/catcher.jpg"
		},
		
{
			name : "Harry Potter and the Prisoner of Azkaban",
			price: "2.50",
			description : "",
			author : "J.K Rowling",
			image : "../img/azkaban.jpg"
		},
    {
			name : "To kill a Mocking Bird",
			price: "4.50",
			description : "",
			author : "H.Lee",
			image :  "../img/mocking_bird.jpg"
		},
    {
			name : "The Brothers Karamazov",
			price: "4.50",
			description : "",
			author : "F.Dostoyevsky",
			image :  "../img/brothers_karamazov.jpg"
		},
    {
			name : "The Crime and Punsishment",
			price: "2.50",
			description : "",
			author : "J.K Rowling",
			image :  "../img/crime_punishment.jpg"
		}
		]
		
	

});
 
		
		
		