//  Birthday

var math = angular.module("plus",[]);
math.controller("select",function($scope){
    $scope.day = ['day',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    $scope.month = ['month','March','April','May','June','July','August','September','October','November','December','Junuary','February'];
    $scope.year = ['year',1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017]
})


//   Country and Capital


var name = angular.module("array",[]).controller("arrayName",function($scope){
    $scope.massiv = [
        {country:'Armenia' , capital:'Erevan'},
        {country:'France' , capital:'Paris'},
        {country:'USA' , capital:'Washington'},
        {country:'China' , capital:'Beijing'},
        {country:'Russia' , capital:'Moscow'},
        {country:'Spain' , capital:'Madrid'},
        {country:'Uk' , capital:'London'},
    ]
})
















