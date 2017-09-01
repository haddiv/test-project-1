angular.module("appContinent",[]).controller("contrContinent",function($scope){
    $scope.continents = [
        {
            "continent":"Europe",
            "text":"Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. Europe is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, and the Mediterranean Sea to the south. It comprises the westernmost part of Eurasia."
         },
         {
             "continent":"Africa",
             "text":"Africa is the world's second-largest and second-most-populous continent (the first being Asia). At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6% of Earth's total surface area and 20.4% of its total land area."
          },
          {
             "continent":"Australia",
             "text":"Australia, sometimes known in technical contexts by the names Sahul, Australinea or Meganesia, to distinguish it from the Australian mainland, is a continent comprising mainland Australia, Tasmania, New Guinea, Seram, possibly Timor, and neighbouring islands."
           }
    ]
})