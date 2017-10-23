// public/js/controllers/NerdCtrl.js
angular.module('NewsCtrl', []).controller('NewsController', function($scope, News) {

$scope.addNews = function(){
    console.log("Hello");

}


    $scope.addIntoDB = function(){

       $scope.categoryObj = {
		name:$scope.categoryName,
		order:Number($scope.categoryOrder)
		}
        console.log($scope.categoryObj)

     News.create($scope.categoryObj).then(function(value) {	   
			   // var val = value.config.data;
				console.log(value);
			
		    });	   

    }

});