// when the user clicks on the .trigger button
$('.trigger').on('click', function () {
	// add the .show-modal class to the .modal
	$('.modal').addClass('show-modal');
});



// when the user clicks on the .close-modal button
$('.close-modal').on('click', function () {
	// remove the .show-modal class to the .modal
	$('.modal').removeClass('show-modal');
});
