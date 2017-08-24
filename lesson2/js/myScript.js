var myApp = angular.module('myApp',[]);
myApp.controller('mycontroler', function ($scope) {
    var person ={
        name:'Sergey',
        surname:'Tonoyan',
        age: '30',
        fullName: function () {
          return  this.name +" "+ this.surname;
        }
    };
    $scope.person = person;
})