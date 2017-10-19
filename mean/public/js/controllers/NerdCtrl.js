angular.module('NerdCtrl', []).controller('NerdController', function ($scope, Nerd, Form, $location) {
    $scope.tagline = 'Nothing beats a pocket protector!';
    angular.element(document).ready(function () {
        Nerd.get().then(function (response) {
            $scope.nerds = response.data;
        });
    });
    $scope.returnObj = function () {
        Nerd.create($scope.Nerd).then(function () {
            console.log($scope.Nerd);
        });
    };

    $scope.deleteFunction = function (id) {
        console.log(id)
        Nerd.delete(id).then(function (val) {
        });
    };
    $scope.viewFunction = function () {
        $scope.open= true;
        $scope.open= false;
        $scope.myFunc = function() {
            $scope.open = !$scope.open;
            $scope.close = !$scope.close;
        }
    };
    $scope.openForm = function () {
        $location.path('/nerds/form');
    };

    /*$scope.updateFunction = function (id) {
     console.log(id)
     Nerd.get($scope.nerds).then(function (response) {
         $scope.nerds = response.response;
         console.log($scope.nerds)
     });
 };*/
});