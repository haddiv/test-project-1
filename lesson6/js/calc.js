



calculatorModel = {
    result: "0",
    operation: "",
    previousNumber: "",
    currentNumber: "",
    lastClicked: "number",
    currentDisplay: "0",

    reset: function() {

        this.result = "0";
        this.operation = "";
        this.previousNumber = "";
        this.currentNumber = "";
        this.currentDisplay = "0";
    },

    setOperation: function(operationToSet) {
        if (this.lastClicked === "number") {
            if (!this.previousNumber) {
                this.operation = operationToSet;
                this.currentDisplay += " " + this.operation + " ";
                this.previousNumber = this.currentNumber;
                this.currentNumber = "";
            } else if (this.previousNumber && this.currentNumber) {
                this.calculate();
                this.previousNumber = this.result;
                this.currentNumber = "";
                this.operation = operationToSet;
                this.currentDisplay += " " + this.operation + " ";
            } else {
                this.operation = operationToSet;
                this.currentDisplay += " " + this.operation + " ";
            }
        }
    },

    calculate: function() {

        switch (this.operation) {
            case "+":
                this.result = (parseFloat(this.result) || parseFloat(this.previousNumber)) + parseFloat(this.currentNumber);
                this.previousNumber = this.result;
                this.currentNumber = "";
                break;

            case "-":
                this.result = (parseFloat(this.result) || parseFloat(this.previousNumber)) - parseFloat(this.currentNumber);
                this.previousNumber = this.result;
                this.currentNumber = "";
                break;

            case "*":
                this.result = (parseFloat(this.result) || parseFloat(this.previousNumber)) * parseFloat(this.currentNumber);
                this.previousNumber = this.result;
                this.currentNumber = "";
                break;

            case "/":
                this.result = (parseFloat(this.result) || parseFloat(this.previousNumber)) / parseFloat(this.currentNumber);
                this.previousNumber = this.result;
                this.currentNumber = "";
                break;
            default:
                this.reset();

        }

    }

};


var calculatorApp = angular.module('calculatorApp', ['calculatorModule']);
var calculatorModule = angular.module('calculatorModule', []);


calculatorModule.controller('calculatorController', ['$scope', function($scope) {
    $scope.calculator = calculatorModel;
    $scope.numberButtonClicked = function(clickedNumber) {
        if (calculatorModel.currentDisplay === "0") {
            calculatorModel.currentDisplay = "";
        }

        calculatorModel.currentNumber = calculatorModel.currentNumber + clickedNumber;
        calculatorModel.currentDisplay += clickedNumber;
        calculatorModel.lastClicked = "number";

    };

    $scope.operationButtonClicked = function(clickedOperation) {
        calculatorModel.setOperation(clickedOperation);
        calculatorModel.lastClicked = "operation";
    };

    $scope.enterClicked = function() {
        calculatorModel.calculate();
        calculatorModel.currentDisplay = calculatorModel.result+'';
        calculatorModel.operation = "";
    };

    $scope.resetClicked = function() {
        calculatorModel.reset();
    };
}]);
