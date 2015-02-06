$(document).ready(function(){
	//Header
	$(window).scroll(function(){
    	if($(window).scrollTop() <= 20){
      		$('.header').removeClass('alt')
    	}else{
      		$('.header').addClass('alt')
    	}
  	});
	//Location
	var btnMenu = $('#btnMenu')
	var btnHome = $('#btnHome')
	var btnDown = $('.icon-down-open')
	var btnProfile = $('.toprofile')
	var btnPhoto = $('.tophotos')
	var btnWork = $('.toworks')
	var btnContact = $('.tocontact')
	var nav = $('#nav')
	var navToggleTrigger = $(document.body).outerWidth(true)
	btnHome.click(function(){
		$("html, body").animate({scrollTop: 0}, 400)
	})
	btnMenu.click(function(){
		nav.toggle()
	})
	function navHide(){
		if (navToggleTrigger < 1024 )
		{
			nav.hide()
		}
	}
	btnDown.click(function(){
		$("html, body").animate({scrollTop: 600}, 800)
	})
	btnProfile.click(function(){
		var height = $('.figure').offset().top + $('.figure').outerHeight() - 50
		$("html, body").animate({scrollTop: height}, 800)
		navHide()
	})
	btnPhoto.click(function(){
		var height = $('.figure').offset().top + $('.figure').outerHeight() + $('.profile').outerHeight() - 50
		$("html, body").animate({scrollTop: height}, 800)
		navHide()
	})
	btnWork.click(function(){
		var height = $('.figure').offset().top + $('.figure').outerHeight() + $('.profile').outerHeight() + $('.photos').outerHeight() - 50
		$("html, body").animate({scrollTop: height}, 800)
		navHide()
	})
	btnContact.click(function(){
		var height = $('.figure').offset().top + $('.figure').outerHeight() + $('.profile').outerHeight() + $('.photos').outerHeight() + $('.contact').outerHeight() - 50
		$("html, body").animate({scrollTop: height}, 800)
		navHide()
	})
	//Flexslider
	$('.flexslider').flexslider({
    	animation: "slide",
		keyboardNav: false,
		mousewheel: false, 
		prevText: "",
    	nextText: ""
  	});
	//Lazyload
	$("#album img").lazyload({ 
    	effect : "fadeIn"
	});
	$(".works .pic img").lazyload({ 
    	effect : "fadeIn"
	});
	//Canvas
	
});