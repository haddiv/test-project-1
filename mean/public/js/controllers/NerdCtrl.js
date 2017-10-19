angular.module('NerdCtrl', []).controller('NerdController', function($scope, Nerd) {
    angular.element(document).ready(function () {
        console.log(Nerd.get());
        Nerd.get().then(function(value) {
            console.log(value.data);
            var val = value.data;

        });
              Nerd.delete(value.data[0]._id);

    });
    $scope.tagline = 'Nothing beats a pocket protector!';

});