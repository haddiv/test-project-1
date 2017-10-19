angular.module('newsCtrl', []).controller('newsController', function($scope, News,$window) {
    $scope.category={};

    angular.element(document).ready(function () {
        // console.log(Nerd.get());

        News.get().then(function (value) {
            var names;
            // console.log(value.data[0]);
            // var val = value.data;
            $scope.names = value.data;
        });

    });



    $scope.del=function(id) {
        News.delete(id);
        $window.location.reload()
    };


    $scope.edit= function(id) {

        News.upd(id).then(function(value){

            var nerds;
            $scope.nerds=value.data;
            $scope.category=$scope.nerds;
        });

    };

    $scope.my = function (category,id) {
        console.log(category);
        console.log(id);
        if(id!==undefined) {

            News.update(category,id);
        }
        else{
            News.create(category);
        }

        // create a bear (accessed at POST http://localhost:8080/api/bears)
    };




});

