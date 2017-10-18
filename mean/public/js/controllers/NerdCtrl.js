angular.module('NerdCtrl', []).controller('NerdController', function($scope, Nerd, Form, $location) {
    $scope.tagline = 'Nothing beats a pocket protector!';
    angular.element(document).ready(function () {

        Nerd.get().then(function(response) {
            $scope.nerds = response.data;
        });
    });
    $scope.openForm=function () {
        $location.path('/nerds/form');
    };

    $scope.viewFunction = function () {
        for (var nerd in $scope.nerds){
            alert(this.nerd);
        }

    };
    $scope.deleteFunction = function (id) {
        console.log(id)
        Nerd.delete(id).then(function(val) {
            console.log("Asti");
        });

    };
    $scope.updateFunction = function (id) {
        console.log(id)
        Nerd.get('/nerds/' + id).then(function(response) {
            $scope.nerds = response.data;
        });

    };
    $scope.returnObj=function () {
        //console.log($scope.nerdObj);
        Nerd.create($scope.Nerd).then(function() {
            console.log($scope.Nerd);
        });
    };
});