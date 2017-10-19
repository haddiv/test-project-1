angular.module('NerdCtrl', []).controller('NerdController', function($scope, Nerd) {
    angular.element(document).ready(function () {
        //console.log(Nerd.get());
		
        Nerd.get().then(function(value) {
            var names;
			//console.log(value.data);
            //var val = value.data;
             $scope.names = value.data; 
        });
              //Nerd.delete(value.data[0]._id);

    });
	
    $scope.edit= function(id) {

        Nerd.upd(id).then(function(value){

            var nerds;
            $scope.nerds=value.data;
$scope.user=$scope.nerds;
        });

    };

    $scope.myFunc = function (user,id) {
        console.log(user);
        console.log(id);
        if(id!==undefined) {

            Nerd.update(user,id);
        }
        else{
            Nerd.create(user);
        }

    
    };

});