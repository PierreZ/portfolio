$( document ).ready(function() {

	//CIR
    $(".CIR_detail").hide();
    $( ".CIR_trigger" ).click(function() {
    	$(".CIR_detail").slideDown("slow");
	});
    $( ".CIR_detail" ).click(function() {
    	$(".CIR_detail").slideUp("slow");
	});
    //Prepa
	$(".prepa_detail").hide();
    $( ".prepa_trigger" ).click(function() {
    	$(".prepa_detail").slideDown("slow");
	});
    $( ".prepa_detail" ).click(function() {
    	$(".prepa_detail").slideUp("slow");
	});
    //arkea
	$(".arkea_detail").hide();
    $( ".arkea_trigger" ).click(function() {
    	$(".arkea_detail").slideDown("slow");
	});
    $( ".arkea_detail" ).click(function() {
    	$(".arkea_detail").slideUp("slow");
	});
    //thomson
	$(".thomson_detail").hide();
    $( ".thomson_trigger" ).click(function() {
    	$(".thomson_detail").slideDown("slow");
	});
    $( ".thomson_detail" ).click(function() {
    	$(".thomson_detail").slideUp("slow");
	});
});


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