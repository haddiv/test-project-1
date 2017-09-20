var app = angular.module('myApp',[]);
        function MyCtrl($scope) {
            $scope.class="";
            $scope.chiliSpicy=function(){
                $scope.class="text_type_bold"
            };
            $scope.jalapenoSpicy=function(){
                $scope.class="text_type_italic"
            };
            $scope.alignTextCenter=function(){
                $scope.class="text_align_center"
            };
            $scope.alignTextRight=function(){
                $scope.class="text_align_right"
            };
            $scope.alignTextLeft=function(){
                $scope.class="text_align_left"
            };
        }