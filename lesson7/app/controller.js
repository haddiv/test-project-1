app.controller("editController",['$scope',function($scope){
		$scope.showStyle = false;
		$scope.showHeading = false;
				
		$scope.selectedText= "";
		$scope.getText = function () {
    $scope.selectedText = window.getSelection().toString();
	
		}
	$scope.standartText =function() {
		
	}
	
	$scope.headingOne =function() {
		$scope.class="heading_one";
	    $scope.showHeading = false;
		
	}
	
	$scope.headingTwo =function() {
		$scope.class="heading_two";
	    $scope.showHeading = false;
		
	}
	
	
	$scope.bold =function() {
		$scope.class="bold";
	    $scope.showHeading = false;
		
	}
		
		
		$scope.italic =function() {
		$scope.class="italic";
	    $scope.showHeading = false;
		
	}
		$scope.text=		"CKEditor BrowniesIngredients:½ cup flourPreheat the oven to 350°F and grease the baking pan. Combine the flour, sugar and cocoa powder in a medium bowl. In another small bowl, whisk together the butter and eggs. Stir the two mixtures until just combined. Bake the brownies for 25 to 35 minutes. Remove from the oven and let it cool for 5 minutes."
		
		
		
		
		
		}])

app.directive("SelectDiv", function() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {
      
      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };

      element.bind("blur keyup change", function() {
        scope.$apply(read);
      });
	  
	  alert(element.html(ngModel.$viewValue))
    }
  };
});	