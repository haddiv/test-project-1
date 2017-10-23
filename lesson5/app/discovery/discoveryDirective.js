app.filter("customFilter",  function($filter) {
  return function(input, filtername) {
    return $filter(filtername)(input);
  };
});


app.directive('searchInput', ['articleDates',function(articleDates,  $filter) {
   	return {
		restrict: "A",
		replace:false,
		template:"<div ng-reapet='x in articleDates | filter:filter'><p>{{x.title }}</p></div>",
		scope:{
			values: '=',
			filter: '='
			}
		
	
  }
  
  
}]);



