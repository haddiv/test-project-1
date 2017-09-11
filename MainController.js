app.controller('MainController', ['$scope', function($scope) { 
$scope.title = 'Top Bestsellers in 2017'; 
$scope.promo='Hot prices only for this month';
$scope.product={
name: 'The Book of Trees', 
price: 19,
pubdate: new Date ('2014', '03', '08')}
}]);
