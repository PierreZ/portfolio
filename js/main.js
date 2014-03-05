var myApp = angular.module('PortfolioApp', ['ngAnimate']);
myApp.controller('Ctrl', function ($scope) {
	$scope.skills=shuffle(skills);
	$scope.skills_cat=skills_cat;
	$scope.skillSelected = 'All';
	$scope.setSkill = function(cat){

		$scope.skillSelected = cat;
	}
	$scope.skill_filter = function(data) {
		if ($scope.skillSelected=='All') {
			return data;
		} else{
  			if (data.type==$scope.skillSelected) {
  				return data;
  			};
			
		};
	}
});

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};