var app = angular.module("instantSearch", []);
app.filter('searchFor', function () {
    return function (arr, searchString) {
        if (!searchString) {
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function (item) {
            if (item.title.toLowerCase().indexOf(searchString) !== -1) {
                result.push(item);
            }
        });
        return result;
    };
});

function InstantSearchController($scope) {
    $scope.items = [
        {

            title: 'Rolls-Roys ',
            price: 'Price $500.000',
            about: 'The design of the Phantom VIII is substantially similar to the predecessor,long bonnet and rear suicide doors, which Rolls-Royce label coach doors.',
            image: 'img/Rolls-Royce.jpg'
        },
        {

            title: 'Porsche Price $110.000',
            price: 'Price $500.000',
            about: 'The new ZF seven-speed PDK dual clutch transmission is standard on the Panamera 4,4S and Turbo models. With the addition ofthe optional sport chrono package,this provides faster acceleration times.',
            image: 'img/porsche.jpg'
        },
        {

            title: 'BMW Price $90.000',
            price: 'Price $500.000',
            about: 'The E60 M5 was introduced in 2005, with an uneven firing V10 engine and 7 speed sequential manual gearbox linking the car with the BMW Sauber Formula One program.',
            image: 'img/bmw.jpg'
        },
        {

            title: 'Mersedes Price $80.000',
            price: 'Price $500.000',
            about: 'The vehicle was unveiled in 2013 Los Angeles International Auto Show and 2013 Tokyo Motor Show, followed by 2013 Osaka Motor Show The vehicle was set to go on sale in March 2014.',
            image: 'img/mersedes.jpg'
        },
        {

            title: 'Infiniti Price $100.000',
            price: 'Price $500.000',
            about: 'The Q50L has a 48 mm (1.9 in) longer wheelbase than the regular Q50 to provide more spacious rear legroom. It is powered by a 2.0 liter turbo engine matched to a 7 speed automatic transmission',
            image: 'img/infiniti.jpg'
        },
        {

            title: 'Ferari Price $120.000',
            price: 'Price $500.000',
            about: 'It is powered by a 3.9-litre twin-turbocharged V8, smaller in displacement and higher in output than the 458 s naturally aspirated engine. The 488 GTB was named "The Supercar of the Year 2015" by car  magazine Top Gear.',
            image: 'img/ferari.jpeg'
        }

    ];


}