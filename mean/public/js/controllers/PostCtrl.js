

angular.module('PostCtrl', []).controller('PostController', function($scope, $location, Post) {
    $scope.createCategory=function () {
        $location.path('/category/category');
    };
    $scope.createPost=function () {
        $location.path('/post/post/postListView');
    };
    angular.element(document).ready(function () {
        Post.get().then(function (response) {
            $scope.posts = response.data;
            console.log( $scope.posts);

        });
    });
});
