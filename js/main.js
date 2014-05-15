$( document ).ready(function() {

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top-60
            }, 1000);
             gnMenu.prototype._closeMenu;
            return false;
        }
    }
});


	//CIR
    $(".CIR_detail").hide();
    $( ".CIR_trigger" ).click(function() {
        if (!$(".CIR_detail").is(":visible")) {
            $(".CIR_detail").slideDown("slow");
        } else{
            $(".CIR_detail").slideUp("slow");
        };
	});
    $( ".CIR_detail" ).click(function() {
    	$(".CIR_detail").slideUp("slow");
	});
    //Prepa
	$(".prepa_detail").hide();
    $( ".prepa_trigger" ).click(function() {
        if (!$(".prepa_detail").is(":visible")) {
            $(".prepa_detail").slideDown("slow");
        } else{
            $(".prepa_detail").slideUp("slow");
        };
    });
    $( ".prepa_detail" ).click(function() {
    	$(".prepa_detail").slideUp("slow");
	});
    //arkea
	$(".arkea_detail").hide();
    $( ".arkea_trigger" ).click(function() {
        if (!$(".arkea_detail").is(":visible")) {
            $(".arkea_detail").slideDown("slow");
        } else{
            $(".arkea_detail").slideUp("slow");
        };
    });
    $( ".arkea_detail" ).click(function() {
    	$(".arkea_detail").slideUp("slow");
	});
    //thomson
	$(".thomson_detail").hide();
    $( ".thomson_trigger" ).click(function() {
        if (!$(".thomson_detail").is(":visible")) {
            $(".thomson_detail").slideDown("slow");
        } else{
            $(".thomson_detail").slideUp("slow");
        };
    });
    $( ".thomson_detail" ).click(function() {
    	$(".thomson_detail").slideUp("slow");
	});
    //line
	$(".line_detail").hide();
    $( ".line_trigger" ).click(function() {
        if (!$(".line_detail").is(":visible")) {
            $(".line_detail").slideDown("slow");
        } else{
            $(".line_detail").slideUp("slow");
        };
    });
    $( ".line_detail" ).click(function() {
    	$(".line_detail").slideUp("slow");
	});
    //homer
	$(".homer_detail").hide();
    $( ".homer_trigger" ).click(function() {
        if (!$(".homer_detail").is(":visible")) {
            $(".homer_detail").slideDown("slow");
        } else{
            $(".homer_detail").slideUp("slow");
        };
    });
    $( ".homer_detail" ).click(function() {
    	$(".homer_detail").slideUp("slow");
	});
    //python
	$(".python_detail").hide();
    $( ".python_trigger" ).click(function() {
        if (!$(".python_detail").is(":visible")) {
            $(".python_detail").slideDown("slow");
        } else{
            $(".python_detail").slideUp("slow");
        };
    });
    $( ".python_detail" ).click(function() {
    	$(".python_detail").slideUp("slow");
	});
    //paidday
	$(".paidday_detail").hide();
    $( ".paidday_trigger" ).click(function() {
        if (!$(".paidday_detail").is(":visible")) {
            $(".paidday_detail").slideDown("slow");
        } else{
            $(".paidday_detail").slideUp("slow");
        };
    });
    $( ".paidday_detail" ).click(function() {
    	$(".paidday_detail").slideUp("slow");
	});
    //rentree
    $(".rentree_detail").hide();
    $( ".rentree_trigger" ).click(function() {
        if (!$(".rentree_detail").is(":visible")) {
            $(".rentree_detail").slideDown("slow");
        } else{
            $(".rentree_detail").slideUp("slow");
        };
    });
    $( ".rentree_detail" ).click(function() {
        $(".rentree_detail").slideUp("slow");
    });
    //orizon
    $(".orizon_detail").hide();
    $( ".orizon_trigger" ).click(function() {
        if (!$(".orizon_detail").is(":visible")) {
            $(".orizon_detail").slideDown("slow");
        } else{
            $(".orizon_detail").slideUp("slow");
        };
    });
    $( ".orizon_detail" ).click(function() {
        $(".orizon_detail").slideUp("slow");
    });
    //skymap
    $(".skymap_detail").hide();
    $( ".skymap_trigger" ).click(function() {
        if (!$(".skymap_detail").is(":visible")) {
            $(".skymap_detail").slideDown("slow");
        } else{
            $(".skymap_detail").slideUp("slow");
        };
    });
    $( ".skymap_detail" ).click(function() {
        $(".skymap_detail").slideUp("slow");
    });
    //glasscamp
	$(".glasscamp_detail").hide();
    $( ".glasscamp_trigger" ).click(function() {
        if (!$(".glasscamp_detail").is(":visible")) {
            $(".glasscamp_detail").slideDown("slow");
        } else{
            $(".glasscamp_detail").slideUp("slow");
        };
    });
    $( ".glasscamp_detail" ).click(function() {
    	$(".glasscamp_detail").slideUp("slow");
	});



setTimeout(
  function() 
  {
    $( ".menu_indicator" ).removeClass( "fadeIn" ).addClass( "shake" );
  }, 2500);
setTimeout(
  function() 
  {
    $( ".menu_indicator" ).removeClass( "shake" ).addClass( "bounce" );
  }, 6000);
setTimeout(
  function() 
  {
    $( ".menu_indicator" ).removeClass( "bounce" ).addClass( "fadeOut" );
  }, 10000);

$(window).scroll(function(){
    if ($('.projects').isOnScreen()==true) {
        setMenu('Projects');
        return ;
    };
    if ($('.education').isOnScreen()) {
        setMenu('Education');
        return ;
    };
    if ($('.work').isOnScreen()) {
        setMenu('Work');
        return ;
    };
    if ($('.skills').isOnScreen()) {
        setMenu('Skills');
        return ;
    };
    if ($('.about').isOnScreen()) {
        setMenu('About Me');
        return ;
    };
    if ($('.welcome').isOnScreen()) {
        setMenu('Welcome');
        return ;
    };


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

$.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};

function setMenu(text){
    if ($( '.changing_menu' ).html()!=text) {
        $( '.changing_menu' ).addClass( "fadeOut" );
        setTimeout(function() {
            $( '.changing_menu' ).html(text);
            $( '.changing_menu' ).removeClass( "fadeOut" ).addClass("fadeIn");
        }, 1000);
    };


};