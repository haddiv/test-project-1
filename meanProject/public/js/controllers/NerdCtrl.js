angular.module('NerdCtrl', []).controller('NerdController', function($scope, Nerd) {
    angular.element(document).ready(function () {
	$scope.show=true;
$scope.submit = function(){
	 
	 $scope.nerdObj = {
            name:$scope.name,
            age:$scope.age,
            city:$scope.city,
			
        }
		console.log($scope.nerdObj);
       Nerd.create($scope.nerdObj).then(function(value) {	   
			    var val = value.config.data;
			
		    });	   
	   }
	   
	 //DELETE
	 $scope.deleteUser = function(){
	 $scope.thisId = this.x._id;
	 //console.log($scope.thisId);
	 //$scope.idi = this.$scope._id;
		console.log($scope.thisId);
	 
	
	 //console.log( $scope.thisId);
		  Nerd.delete($scope.thisId).then(function(value) {
            
			console.log("done")
        })
    }  
		
			//Update
			$scope.updateUser=function(){
					$scope.show=false;
					
					
					$scope.id= this.x._id;
					$scope.name= this.x.name;
					$scope.age= this.x.age;
					$scope.city= this.x.city;
					}
					
					
  			
			//Get from DB
			Nerd.get().then(function(value) {
			$scope.resArr = value.data;
			
		  		
			})
			
			
							
				
				
	


});
});