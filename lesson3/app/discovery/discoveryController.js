//SLIDER
app.controller("SliderSection", 
			function($scope,$interval){
			$scope.images = ["../../images/planetsForSlider.png","../../images/solarSystem.jpg"];
			$scope.index = 0;
			$scope.imgIndex = function(){
				$scope.index++;
					if($scope.index ==$scope.images.length){
						$scope.index = 0;
								}
								
					$scope.img = $scope.images[$scope.index];
				};
			$interval(function(){
			$scope.imgIndex();
					
			},3000)
			 
			});
			
//SUM OF PAGE VISITES
app.controller("NumberOfPageVIsits",function($scope,articleDates,sumOfVisites){
		$scope.numOfVisites = sumOfVisites.count(articleDates);
		
		})	

//NUMBER OF ARTICLES
	app.controller("ArticleNum", function($scope,articleDates){
	
		$scope.articleDates=articleDates;
				$scope.numOfArticles=0;
				for(var key in $scope.articleDates){
				$scope.numOfArticles++;
				console.log($scope.numOfArticles);
				}
		})	
		
//ARTICLES AND LAST NEWS DISPLAY
app.controller("ArticleSection",function($scope,$filter,articleDates){
				$scope.articleDatas = articleDates;
				console.log($scope.articleDatas);
				
				for(var i = 0; i<$scope.articleDatas.length;i++){
				var arr = [];
						arr.push(($scope.articleDatas[i].publicDate).getTime());
						console.log($scope.articleDatas[i].publicDate);
						
						}
				$filter('filter')(arr,function(){
											arr.reverse();
											var lastArticleIndex = arr[0];
											for(var i = 0; i<$scope.articleDatas.length;i++){
				if(($scope.articleDatas[i].publicDate).getTime()==lastArticleIndex){
				var lastNews = $scope.articleDatas[i];
				console.log(lastNews);
				}
				
				
				return lastNews
				}
		})
		})
		
	
	
 //LAST NEWS  
 /* app.controller("LastNews",function($scope,customFilter,articleDates){
        
		//$scope.lastNews = customFilter(articleDates,articleDatas);
		console.log($scope.articleDatas[0].publicDate);
		})  
  */
 
 
 // FILTER OF LAST NEWS 
  /* app.filter("customFilter", function(data){

		return function(time){
		    
			var arr=[];
			for(var i=0;i<data.length;i++){
			var sec = (data[i].time).getTime();
			
	    }
		arr.reverse();
		var lastDate = arr[0];
	
		for(var i=0;i<data.length;i++){
		if(((data[i].time).getTime())==lastDate){
			var displayLastNews = arr[i];
					
			}
			
			}
			console.log(displayLastNews);
		return displayLastNews;
		}
		})	*/
	




	
	
	
//SERVICES
// return all datas	
app.service("articleDates",function(){
    return 	articles = [{
		title:"What Is Mars?",
        article:"Mars is a planet. It is the fourth planet from the sun. It is the next planet beyond Earth. Mars is more than 142 million miles from the sun. The planet is about one-sixth the size of Earth. Mars is known as the Red Planet. It gets its red color from the iron in its soil. Mars has two small moons. Their names are Phobos and Deimos.",
        publicDate:new Date(2017,04,05),
		visited:10		
		},
		
	{
	title:"The Earth",
     article:"Earth is the fifth largest of the planets in the solar system — smaller than the four gas giants, Jupiter, Saturn, Uranusand Neptune, but larger than the three other rocky planets, Mercury, Marsand Venus.Earth has a diameter of roughly 8,000 miles (13,000 kilometers), and is round because gravity pulls matter into a ball, although it is not perfectly round, instead being more of an 'oblate spheroid' whose spin causes it to be squashed at its poles and swollen at the equator.",
        publicDate:new Date(2017,01,01),
		visited:14		
		},
		
		{
		title:"Venera",
        article:"Mars is a planet. It is the fourth planet from the sun. It is the next planet beyond Earth. Mars is more than 142 million miles from the sun. The planet is about one-sixth the size of Earth. Mars is known as the Red Planet. It gets its red color from the iron in its soil. Mars has two small moons. Their names are Phobos and Deimos.",
        publicDate:new Date(2017,07,28),
		visited:10		
		},
]
   })

//NUMBER OF ARTICLES
app.service('sumOfVisites', function() {
    this.count = function (arr) {
				var cnt = 0;
				for(var i =0; i< arr.length;i++){
						cnt+=arr[i].visited;
        
    }
	return cnt;
}
});
	
	
//LAST NEWS WITHOUT FILTERING
	
	/*$scope.arrayOfDate=[];
	for(var i=0;i<$scope.articleDates.length;i++){
	//console.log($scope.articleDates[i]);
	$scope.dateInMiliseconds = ($scope.articleDates[i].publicDate).getTime();
	$scope.arrayOfDate.push($scope.dateInMiliseconds);
	    }
	$scope.arrayOfDate.reverse();
	$scope.lastDate = $scope.arrayOfDate[0];
	
	for(var i=0;i<$scope.articleDates.length;i++){
	if((($scope.articleDates[i].publicDate).getTime())==$scope.lastDate){
			$scope.displayLastNews = $scope.articleDates[i];
					
			}
			}*/