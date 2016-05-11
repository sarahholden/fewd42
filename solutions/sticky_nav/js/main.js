// Find out the distance from the top of the .main-nav to the top of the page
var stickyNavTop = $('.main-nav').offset().top;


// When the user scrolls
$(window).on('scroll', function() {
	var scrollTop = $(window).scrollTop();

	// If the distance from the top of the page to where the user has scrolled is >= the distance from the stickyNavTop
  if( scrollTop >= stickyNavTop ) {

  	// Add the class 'scrolled' to fix the nav to the top
    $('.main-nav').addClass('scrolled');

  // Otherwise
  } else {
  	// Remove the class 'scrolled' from the .main-nav
    $('.main-nav').removeClass('scrolled');
  }
});