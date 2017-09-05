app.directive('searchResultDiv', function() {
    
	return {
	templateUrl: 'spaceView.html',
    template: "searchDiv",
	restrict:"AEC"
  };
});

app.directive('toLowercase',function(){
	return {
	     restrict:"A",
		 require: 'ngModel',
		 scope:{
			value:'@inputValue',
			},
	    link:function(scope,elem,attr,ngModel){
		
		console.log(ngModel.$viewValue);

		var newString = attr.inputValue.toLowerCase;
		}
	
	
	}
	})	
	