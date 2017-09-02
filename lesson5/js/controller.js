alert("safds");
var app = angular.module("prodApp");
app.controller("prodCtrl", function ($scope) {
    $scope.phones = [
        {name: "Samsung SM-J106F Galaxy J1", description: "4x1.5 ГГц, 1 ГБ, 2 SIM, TFT, 800x480, камера 5 Мп, 3G, 4G, GPS, microSD, 1500 мАч", image: "../img/p1.jpg", price: 2990},
        {name: "Vertex Impress XL", description: "4x1 ГГц, 1 ГБ, 2 SIM, IPS, 1280х720, камера 8 Мп, 3G, 4G, GPS, FM, microSD, 2000 мАч", image: "../img/p2.jpg", price: 3950},
        {name: "DEXP Ixion MS550", description: "4x1.3 ГГц, 2 ГБ, 2 SIM, IPS, 1280х720, камера 8 Мп, 3G, 4G, GPS, FM, microSD, 2000 мАч", image: "../img/p3.jpg", price: 5990},
        {name: "Fly FS457 Nimbus", description: "4x1.5 ГГц, 1 ГБ, 2 SIM, TFT, 854x480, камера 5 Мп, 3G, 4G, GPS, FM, microSD, 1700 мАч", image: "../img/p4.jpg", price: 4200},
        {name: "Philips S396", description: "8x1.8 ГГц, 2 ГБ, 2 SIM, IPS, 1920х1080, камера 13 Мп, 3G, 4G, GPS, FM, microSD, 2960 мАч", image: "../img/p5.jpg", price: 8000}
    ];
    $scope.tvs = [
        {name: "Harper", description: "1366x768 (HD), HDMI х 1, USB х 1, VGA (D-Sub)", image: "../img/t1.jpg", price: 6700},
        {name: "Fusion FLTV-19T21", description: "1366x768 (HD), DVB-T, DVB-T2, DVB-C, HDMI х 1, USB х 1, VGA (D-Sub)", image: "../img/t2.jpg", price: 7499},
        {name: "Shivaki STV-24LED17", description: "1366x768 (HD), DVB-T, DVB-T2, DVB-C, HDMI х 1, USB х 1, VGA (D-Sub)", image: "../img/t3.jpg", price: 8990},
        {name: "Supra STV-LC22T890FL", description: "1366x768 (HD), DVB-T2, DVB-C, HDMI х 1, USB х 1, VGA (D-Sub)", image: "../img/t4.jpg", price: 9400},
        {name: "Erisson 32LET41T2", description: "1366x768 (HD), DVB-T, DVB-T2, DVB-C, HDMI х 2, USB х 1, VGA (D-Sub)]", image: "../img/t5.jpg", price: 10400}
    ];
    $scope.houseProds = [
        {name: "Indesit IWB 5103", description: "5 кг, фронтальная загрузка, программ - 16, отжим - 1000 об/мин, 600 мм x 850 мм x 520 мм", image: "../img/h1.jpg", price: 17220},
        {name: "Candy CS4 1062D1/2-07", description: "6 кг, фронтальная загрузка, программ - 16, отжим - 1000 об/мин, 600 мм x 850 мм x 432 мм", image: "../img/h2.jpg", price: 17499},
        {name: "Hansa WHC 1038", description: "6 кг, фронтальная загрузка, программ - 16, отжим - 1000 об/мин, 595 мм x 850 мм x 470 мм", image: "../img/h3.jpg", price: 18990},
        {name: "Beko WKB 60841 PTYA", description: "6 кг, фронтальная загрузка, программ - 16, отжим - 800 об/мин, 600 мм x 840 мм x 415 мм", image: "../img/h4.jpg", price: 19799},
        {name: "Hotpoint-Ariston VMSG 702 B", description: "7 кг, фронтальная загрузка, программ - 16, отжим - 1000 об/мин, 600 мм x 850 мм x 440 мм", image: "../img/h5.jpg", price: 21400},
        {name: "Hotpoint-Ariston VMSG 702 B", description: "6 кг, фронтальная загрузка, программ - 8, отжим - 1000 об/мин, 600 мм x 850 мм x 450 мм", image: "../img/h6.jpg", price: 24999}
    ];
    $scope.games = [
        {name: "PlayStation 4 Slim", description: "500 Гб, геймпад - 1, Bluetooth, Wi-Fi, USB x2, проприетарный (AUX), черный", image: "../img/g1.jpg", price: 19990},
        {name: "Microsoft Xbox 360", description: "500 Гб, геймпад - 1 шт, Wi-Fi, USB x5, черный", image: "../img/g2.jpg", price: 11900},
        {name: "Microsoft Xbox One", description: "500 Гб, геймпад - 1 шт, Wi-Fi, USB x3, IR out, черный", image: "../img/g3.jpg", price: 17990}
    ];
    $scope.computers = [
        {name: "Acer Extensa", description: "Intel Celeron J3060D, 2x1600 МГц, 2 ГБ DDR3, HDD 500 ГБ, Dos", image: "../img/c1.jpg", price: 9999},
        {name: "DEXP Aquilon", description: "Intel Celeron J1800, 2x2410 МГц, 2 ГБ DDR3, HDD 320 ГБ", image: "../img/c2.jpg", price: 8000},
        {name: "IRU Office 110", description: "Intel Celeron J3355, 2x2000 МГц, 4 ГБ DDR3, HDD 500 ГБ, Dos", image: "../img/c3.jpg", price: 12000},
        {name: "OLDI Celeron", description: "Intel Celeron G1840, 2x2800 МГц, 2 ГБ DDR3, HDD 500 ГБ", image: "../img/c4.jpg", price: 13900},
        {name: "DEXP Aquilon", description: "AMD A6 5400B, 2x3600 МГц, 4 ГБ DDR3, HDD 500 ГБ", image: "../img/c5.jpg", price: 14999}
    ];
});