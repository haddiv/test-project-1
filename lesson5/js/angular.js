var app = angular.module("mainApp", []);
app.directive("product", function () {
    return {
        restrict: "E",
        template: ' <div class="row text-center" >' +
        '<div class="col-lg-3 col-md-6 mb-4" ng-repeat="key in products | filter:title">' +
        ' <div class="card">' +
        '<img class="card-img-top" src="img/products/{{key.img_src}}" alt="">' +
        '<div class="card-body">' +
        '<h5 class="card-title">{{key.name}}</h5>' +
        '<p>{{key.price | currency}}</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    };
});

app.controller('productCtrl', function ($scope) {
    $scope.products = [
        {name: 'Zara Cuddle Chair - Grey', price: 299.99, img_src: "1490023908_614.jpg"},
        {name: 'Falkon Right-Hand Facing Recliner Corner', price: 999.99, img_src: "1459906767_103.jpg"},
        {name: 'Tempo Tub Chair - Turquoise', price: 99.99, img_src: "1465806076_811.jpg"},
        {name: 'Indiana Three Seater Recliner - Tan', price: 599.99, img_src: "1470668488_521.jpg"},
        {name: 'Tokyo Massage Chair with Footstool - Lat...', price: 239.99, img_src: "1459906273_522.jpg"},
        {name: 'Bento Sofa Bed - Dark Grey', price: 249.99, img_src: "1470671781_819.jpg"},
        {name: 'Shankar Tub Chair Set', price: 149.99, img_src: "1459909986_668.jpg"},
        {name: 'Tempo Tub Chair - Mink', price: 99.99, img_src: "1465806426_955.jpg"}
    ];
});

app.controller('livingRoomCtrl', function ($scope) {
    $scope.products = [
        {name: 'Evelyn Nest Of Tables - Oak', price: 59.99, img_src: "1463066179_708.jpg"},
        {name: 'Goa Sideboard - Brown', price: 277.49, img_src: "1463065938_534.jpg"},
        {name: 'Corona Three Door Two Drawer Medium Side...', price: 129.99, img_src: "1459907600_789.jpg"},
        {name: 'Montana TV Stand - Whitewashed Oak', price: 99.99, img_src: "1459904708_691.jpg"},
        {name: 'Curva Glass Coffee Table - White', price: 99.99, img_src: "1459906632_319.jpg"},
        {name: 'Diamond Coffee Table - Black', price: 59.99, img_src: "1459906529_995.jpg"},
        {name: 'Kansas Three Door Three Drawer Sideboard...', price: 269.99, img_src: "1459907233_461.jpg"},
        {name: 'Kansas TV Unit', price: 119.99, img_src: "1459907238_968.jpg"}
    ];
});

app.controller('diningRoomCtrl', function ($scope) {
    $scope.products = [
        {name: 'York Dining Set - Natural', price: 349.99, img_src: "1459909163_982.jpg"},
        {name: 'Mika Table and Chairs Set', price: 134.49, img_src: "1476884537_889.jpg"},
        {name: 'Sonoma Folding Barstool', price: 9.99, img_src: "1478609647_644.jpg"},
        {name: 'Amber Drop Leaf Table and Dining Chairs ...', price: 149.99, img_src: "1473930324_195.jpg"}
    ];
});

app.controller('bedroomCtrl', function ($scope) {
    $scope.products = [
        {name: 'Selene Bed', price: 229.99, img_src: "1459909863_777.jpg"},
        {name: 'Artemis Gas Lift Storage Bed Frame', price: 229.49, img_src: "1464087635_381.jpg"},
        {name: 'Folding Dressing Table Mirror', price: 69.99, img_src: "1459332013_806.jpg"},
        {name: 'Belle Mirrored Six Drawer Chest', price: 369.99, img_src: "1474538045_481.jpg"}
    ];
});

app.controller('kidsCtrl', function ($scope) {
    $scope.products = [
        {name: 'Frozen Metal Multi Bin - Blue', price: 19.99, img_src: "1459331898_980.jpg"},
        {name: 'Frozen Sling Bookcase - Purple', price: 29.49, img_src: "1473435879_372.jpg"},
        {name: 'Child\'s Loose Cover Comfy Chair - London', price: 109.00, img_src: "1477393704_467.jpg"},
        {name: 'Disney Princess Six Bin Storage - Pink', price: 39.99, img_src: "1475493826_497.jpg"}
    ];
});

app.controller('officeCtrl', function ($scope) {
    $scope.products = [
        {name: 'Computer Desk - Cottage Green', price: 289.99, img_src: "1474970255_798.jpg"},
        {name: 'Wooden Quadpod Table Lamp', price: 9.99, img_src: "1486129429_245.jpg"},
        {name: 'Asteroid Office Chair - Black', price: 59.99, img_src: "1459909506_898.jpg"},
        {name: 'Foolscap Organiser File with Suspension ...', price: 9.99, img_src: "1459879888_253.jpg"}
    ];
});