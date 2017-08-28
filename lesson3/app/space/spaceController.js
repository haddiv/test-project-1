app.controller("SpaceController",function($scope,data){

    $scope.showPlanetInfo=function(){
			for($scope.i =0;$scope.i< data.length;$scope.i++){
				if($scope.planetName === data[$scope.i].name){
				$scope.planetInfo = data[$scope.i].about;
							break;
								}
				else{
					$scope.planetInfo = "Ooops, have you discovered a new planet :)?"
					}
			}
		}
		})
		
		
app.service('data', function() {
   return planets = [

	{
	 name:"mars",
	 averageOrbitalSpeed:"24.077 km/s",
	 surfaceArea:"144.798.500 sq km",
	 mass:"6.4171* 10 23degree kg",
	 surfaceTemp:"-63",
	 orbitalPeriod:687,
	 about:"Mars is a planet. It is the fourth planet from the sun. It is the next planet beyond Earth. Mars is more than 142 million miles from the sun. The planet is about one-sixth the size of Earth. Mars is known as the Red Planet. It gets its red color from the iron in its soil. Mars has two small moons. Their names are Phobos and Deimos."

	 },
	 
	 {
	 name:"earth",
	 averageOrbitalSpeed:"29.78 km/s",
	 surfaceArea:"144.798.500 sq km",
	 mass:"6.4171* 10 23degree kg",
	 surfaceTemp:"-63",
	 orbitalPeriod:687,
	 about:"Earth is the third planet from the Sun and the only object in the Universe known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4 billion years ago.Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 time"
	 },
	{
	name:"mercury",
	 averageOrbitalSpeed:"29.78 km/s",
	 surfaceArea:"144.798.500 sq km",
	 mass:"6.4171* 10 23degree kg",
	 surfaceTemp:"-63",
	 orbitalPeriod:687,
	 about:"Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 88 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods.Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, so it can only be seen visually in the morning or the evening sky, and never exceeds 28° away from the Sun. Also, like Venus and the Moon, the planet displays the complete range of phases as it moves around its orbit relative to Earth. Seen from Earth, this cycle of phases reoccurs approximately every 116 days, the so-called synodic period. Although Mercury can appear as a bright star-like object when viewed from Earth, its proximity to the Sun often makes it more difficult to see than Venus."
	 },
	 
	 {
	 name:"venus",
	 averageOrbitalSpeed:"29.78 km/s",
	 surfaceArea:"144.798.500 sq km",
	 mass:"6.4171* 10 23degree kg",
	 surfaceTemp:"-63",
	 orbitalPeriod:687,
	 about:"Venus is the second planet from the Sun, orbiting it every 224.7 Earth days.[12] It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets. It has no natural satellites. It is named after the Roman goddess of love and beauty. It is the second-brightest natural object in the night sky after the Moon, reaching an apparent magnitude of −4.6 – bright enough to cast shadows at night and, rarely, visible to the naked eye in broad daylight.[13][14] Orbiting within Earth's orbit, Venus is an inferior planet and never appears to venture far from the Sun; its maximum angular distance from the Sun (elongation) is 47.8°."
	 
	 },
	 
	 {
	 name:"jupiter",
	 averageOrbitalSpeed:"29.78 km/s",
	 surfaceArea:"144.798.500 sq km",
	 mass:"6.4171* 10 23degree kg",
	 surfaceTemp:"-63",
	 orbitalPeriod:687,
	 about:"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. Jupiter and Saturn are gas giants; the other two giant planets, Uranus and Neptune are ice giants. Jupiter has been known to astronomers since antiquity.[12] The Romans named it after their god Jupiter.[13] When viewed from Earth, Jupiter can reach an apparent magnitude of −2.94, bright enough for its reflected light to cast shadows,[14] and making it on average the third-brightest object in the night sky after the Moon and Venus."
	 },
	 
	{
   	name:"saturn",
	 averageOrbitalSpeed:"29.78 km/s",
	 surfaceArea:"144.798.500 sq km",
	 mass:"6.4171* 10 23degree kg",
	 surfaceTemp:"-63",
	 orbitalPeriod:687,
	 about:"Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.[11][12] Although it has only one-eighth the average density of Earth, with its larger volume Saturn is just over 95 times more massive.[13][14][15] Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god's sickle."
	 },
	 {
	 name:"uranus",
	 averageOrbitalSpeed:"29.78 km/s",
	 surfaceArea:"144.798.500 sq km",
	 mass:"6.4171* 10 23degree kg",
	 surfaceTemp:"-63",
	 orbitalPeriod:687,
	 about:"Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have different bulk chemical composition from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as 'ice giants' to distinguish them from the gas giants. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more 'ices' such as water, ammonia, and methane, along with traces of other hydrocarbons.[12] It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds.[12] The interior of Uranus is mainly composed of ices and rock."
	 },
	 
	{
	name:"neptune",
	 averageOrbitalSpeed:"29.78 km/s",
	 surfaceArea:"144.798.500 sq km",
	 mass:"6.4171* 10 23degree kg",
	 surfaceTemp:"-63",
	 orbitalPeriod:687,
	 about:"Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger than Neptune.[d] Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 astronomical units (4.50×109 km). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident."
	 },
];
});


		