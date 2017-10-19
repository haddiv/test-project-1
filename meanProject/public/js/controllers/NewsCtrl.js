// public/js/controllers/NerdCtrl.js
angular.module('NewsCtrl', []).controller('NewsController', function($scope) {

$scope.addNews = function(){
    console.log("Hello");

}


    $scope.addIntoDB = function(){


        console.log($scope.category)

      //News.create($scope.category).function

    }

});