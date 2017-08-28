var app = angular.module('mainApp', []);
app.controller('numbersCtrl', function ($scope) {
    $scope.numbers = [
        9,
        11,
        10,
        12,
        20,
        5,
        1,
        3,
        25
    ];
});

// Custom Filter
app.filter('minNum', function () {
    return function (nums) {
        var i, min = nums[0];
        for (i = 0; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i];
            }
        }
        return min;
    };
});

// Custom Service
app.service('sum', function () {
    this.calculateSum = function (nums) {
        var i, sum = 0;
        for (i = 0; i < nums.length; i++) {
            sum = sum + nums[i];
        }
        return sum;
    };
});
app.filter('myFormat', ['sum', function (sum) {
    return function (x) {
        return sum.calculateSum(x);
    };
}]);

// filter
app.controller('wordsCtrl', function ($scope) {
    $scope.words = [
        {eng: 'invent', arm: 'հնարել'},
        {eng: 'attention', arm: 'ուշադրություն'},
        {eng: 'self-defense', arm: 'ինքնապաշտպանություն'},
        {eng: 'obviously', arm: 'ակնհայտորեն'},
        {eng: 'realizable', arm: 'իրականանալի'}
    ];
});

// json
app.controller('studentsCtrl', function ($scope) {
    $scope.students = [
        {name: "Mike", dept: "Computer", fees: 5000, examDate: 9},
        {name: "Jai", dept: "Computer", fees: 5000, examDate: 3},
        {name: "Vivek", dept: "Computer", fees: 5000, examDate: 2},
        {name: "Watson", dept: "Arts", fees: 4000, examDate: 332},
        {name: "Rohit", dept: "Arts", fees: 4000, examDate: 334},
        {name: "Sanga", dept: "Arts", fees: 4000, examDate: 339}
    ];
});

// limitTo
app.controller('numsCtrl', function ($scope) {
    $scope.nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    $scope.numLimit = 5;
    $scope.numBegin = 2;
});

// orderBy
app.controller('countriesCtrl', function ($scope) {
    $scope.countries = [
        {name: 'USA', states: '51', gdp: 19},
        {name: 'CHINA', states: '28', gdp: 18},
        {name: 'INDIA', states: '30', gdp: 9},
        {name: 'GERMANY', states: '16', gdp: 5},
        {name: 'JAPAN', states: '14', gdp: 4}
    ];
});