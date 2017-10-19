angular.module('NerdCtrl', []).controller('NerdController', function ($scope, Nerd, Form, $location) {
    $scope.tagline = 'Nothing beats a pocket protector!';
    angular.element(document).ready(function () {
        Nerd.get().then(function (response) {
            $scope.nerds = response.data;
        });
    });

    $scope.openForm = function () {
        $location.path('/nerds/form');
    };

    $scope.viewFunction = function () {
        $scope.open= true;
        $scope.open= false;
        $scope.myFunc = function() {
            $scope.open = !$scope.open;
            $scope.close = !$scope.close;
        }
    };

    $scope.deleteFunction = function (id) {
        console.log(id)
        Nerd.delete(id).then(function (val) {
        });

    };
    $scope.updateFunction = function (id) {
        console.log(id)
        Nerd.put($scope.Nerd).then(function (response) {
            $scope.nerds = response.data;
            console.log(response.data)
        });
    };


    $scope.returnObj = function () {
        //console.log($scope.nerdObj);
        Nerd.create($scope.Nerd).then(function () {
            console.log($scope.Nerd);
        });
    };
});