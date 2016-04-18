$('#main-nav a').on('click', function () {

	if ($(this).hasClass('active')) {

		$(this).removeClass('active');

		$('#slide-down').slideUp();

	} else {

		$('#main-nav a').removeClass('active');

		$(this).addClass('active');

		$('#slide-down').slideDown();
		
		$('.nav-panel').hide();

		var sectionToShow = $(this).data('related-panel');

		$('#' + sectionToShow).show();		
	}

});