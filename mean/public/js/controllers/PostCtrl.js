angular.module('PostCtrl', []).controller('PostController', function($scope, $location, Category, Post) {
    angular.element(document).ready(function () {
        Post.get().then(function (response) {
            $scope.posts = response.data;
            console.log( $scope.posts);
            // $scope.categoris = Category;
            //console.log( $scope.categoris);
        });
    });
    $scope.createCategory=function () {
        $location.path('/category/category');
    };
    $scope.createPost=function () {
        Post.create($scope.Post).then(function () {
            console.log($scope.Post);
        });
    };


});
