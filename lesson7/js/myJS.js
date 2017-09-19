var app = angular.module("myApp",[]);

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    }
    alert(text);
}

app.service('getText', function() {
    this.myFunc = function () {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        }
        return text;
    }
});
app.controller('myCtrl', function($scope, getText) {
    /*$scope.myFunc = function () {
        $scope.textStyle = "";
        if (window.getSelection) {
            $scope.textStyle = window.getSelection().toString();
        }
        return $scope.textStyle;
        console.log($scope.textStyle)
    };*/


    $scope.textStyle=getText.myFunc();
    // bold italic strike
    $scope.changeToBold=function () {
        $scope.textStyle={
            'font-weight':"bold"
        };

        console.log($scope.textStyle);
    };
    $scope.changeToItalic=function () {
        $scope.textStyle={
            'font-style':"italic"
        };
    };
    $scope.changeToStrike=function () {
        $scope.textStyle={
            'text-decoration':"line-through"
        };
    };

    // lists
    $scope.order={
        'list-style-type':"circle"
    };
    $scope.orderedList=function () {
        $scope.order={
            'list-style-type':"decimal"
        };
    };
    $scope.unorderedList=function () {
        $scope.order={
            'list-style-type':"disc"
        };
    };

    //normal, heading1, heading2, formated

    $scope.normal=function () {
        $scope.textStyle={
            'font-size':"15px"
        };
    };
    $scope.heading1=function () {
        $scope.textStyle={
            'background-color':"red"
        };
    };
    $scope.heading2=function () {
        $scope.textStyle={
            'font-size':"20px"
        };
    };
});