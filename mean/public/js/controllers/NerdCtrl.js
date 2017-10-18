angular.module('NerdCtrl', []).controller('NerdController', function($scope, Nerd, $location) {
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

    }
    $scope.deleteFunction = function (id) {
        console.log(id)
        Nerd.delete(id).then(function(val) {
            console.log("Asti");
        });

    }
});