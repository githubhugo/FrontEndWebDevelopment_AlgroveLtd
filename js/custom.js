$(document).ready(function() {


/************** ACCORDIAN MENU *****************/

$('#accordion-menu > ul > li:has(ul)').addClass("has-sub");
$('#accordion-menu > ul > li > a').click(function() {

	var checkElement = $(this).next();
      console.log(checkElement);

	$('#accordion-menu li').removeClass('active');
	$(this).closest('li').addClass('active');	

	if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
  		$(this).closest('li').removeClass('active'); 
  		checkElement.slideUp('normal');
	}

	if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
  		$('#accordion-menu ul ul:visible').slideUp('normal');
  		checkElement.slideDown('normal'); 
	}

	if (checkElement.is('ul')) {
  		return false;
  		} else {
  		return true;
	}
});


/************** BURGER MENU ******************/

$('.burger').click(function(e) {
  $(this).toggleClass('nav');
  $('.burger-menu ul').toggleClass('nav');
        e.preventDefault();
});

$(window).resize(function() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    $('.burger-menu ul').addClass('nav');  
  }
});

});


/************** SMOOTH SCROLL ******************/

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
