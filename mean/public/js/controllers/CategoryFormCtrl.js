angular.module('CategoryCtrl', []).controller('CatergoryController', function ($scope, Post, Category) {
    angular.element(document).ready(function () {
        Category.get().then(function (response) {
            $scope.categoris = response.data;
            console.log(response.data);
        });
    });
    $scope.addCategory = function () {
        Category.create($scope.Category).then(function () {
            console.log($scope.Category);
        });
    };
    $scope.showCategoryForm = function () {
        $scope.categoryForm = !$scope.categoryForm;
    };
    $scope.deleteFunction = function (id) {
        console.log(id)
        Category.delete(id).then(function (val) {
        });
    };
});