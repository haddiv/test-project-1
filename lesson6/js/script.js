angular.module('ui.bootstrap.carousel.demo', ['ui.bootstrap', 'ngTouch', 'angular-carousel'])
	.controller('uiCtrl', sliderCtrl)

function sliderCtrl($scope){
  $scope.myInterval = 3000;
  $scope.users = [
    {	name  : "William Black",
			title : "Web Developer",
			desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec velit dui. Pellentesque volutpat faucibus risus, ac accumsan purus.",
			image :  "http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/celebrities_with_adhd_slideshow/getty_rm_photo_of_justin_timberlake.jpg"
		},
		
		{	name  : "Christina Doe",
			title : "Student",
			desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec velit dui. Pellentesque volutpat faucibus risus, ac accumsan purus.",
			image : "https://img.buzzfeed.com/buzzfeed-static/static/2016-01/19/12/campaign_images/webdr01/30-celebrities-turning-30-in-2016-2-15835-1453224669-3_dblbig.jpg"
		},
		
		{	name  : "Steve Right",
			title : "Web designer",
			desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec velit dui. Pellentesque volutpat faucibus risus, ac accumsan purus.",
			image :  "http://media.beliefnet.com/~/media/photos-with-attribution/entertainment/galleries/celebs%20that%20found%20god/celebritiesfoundgod4.jpg?h=318"
		},
		
		{	name  : "Thomas Bell",
			title: "Content Writer",
			desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec velit dui. Pellentesque volutpat faucibus risus, ac accumsan purus.",
			image :  "http://media.beliefnet.com/~/media/photos-with-attribution/entertainment/galleries/celebs%20that%20found%20god/celebritiesfoundgod4.jpg?h=318"
		}
  ];
}

