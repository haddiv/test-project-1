var app = angular.module("myApp",[]);

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    }
    alert(text);
}

app.service('getText', function() {
    var text = "";
    this.myFunc = function () {
        if (window.getSelection) {
            text = window.getSelection().toString();
            console.log("sfdsda");
        }
        console.log(text);
        return text;

    };
});
app.controller('myCtrl', function($scope) {
    $scope.text = "";
    $scope.myFunc = function () {
        if (window.getSelection) {
            $scope.text = window.getSelection().toString();
        }
        console.log($scope.text)
        return $scope.text;

    };

    $scope.testClick=function () {
        console.log($scope.text);
    };
    // bold italic strike
    $scope.changeToBold=function (test) {
        $scope.text={
            'font-weight':"bold"
        };
        console.log($scope.text)
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
            'font-size':"12px"
        };
    };
    $scope.heading1=function () {
        $scope.textStyle={
            'font-size':"20px"
        };
    };
    $scope.heading2=function () {
        $scope.textStyle={
            'font-size':"18px"
        };
    };
});