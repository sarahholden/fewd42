$('#fahrenheit_to_celsius').on('click', function () {

	var fahrenheit = $('#temperature').val();

	if (fahrenheit === '' || isNaN(fahrenheit)) {

		addErrorStyles();

	} else {

		clearErrorStyles();

		fahrenheit = parseFloat(fahrenheit);

		var celsius = (fahrenheit - 32) / 1.8;

		changeBackgroundColor(fahrenheit);

		celsius = celsius.toFixed(2);

		// Hint: http://dev.w3.org/html5/html-author/charref
		$("#result").html(fahrenheit + "&deg;F = " + celsius + "&deg;C");

		$('#temperature').val('');
	}



});


$('#celsius_to_fahrenheit').on('click', function () {

	var celsius = $('#temperature').val();

	if (celsius === '' || isNaN(celsius)) {

		addErrorStyles();

	} else {

		clearErrorStyles();

		celsius = parseFloat(celsius);

		var fahrenheit = 1.8 * celsius + 32;

		changeBackgroundColor(fahrenheit);

		fahrenheit = fahrenheit.toFixed(2);

		$("#result").html(celsius + "&deg;C = " + fahrenheit + "&deg;F");

		$('#temperature').val('');
	}
	
});


function addErrorStyles () {

	$('#result').hide();

	$('#temperature').addClass('error');

	$('.error-message').fadeIn(300);

	$('body').attr('class', '');
}

function clearErrorStyles () {

	$('.error-message').hide();

	$('#temperature').removeClass('error');

	$('#result').fadeIn(300);

}

function changeBackgroundColor (temp) {

	// Read top answer here: http://stackoverflow.com/questions/9090991/benefits-of-using-attr-over-addclass-in-jquery
	if (temp <= 32) {

		$('body').attr('class', 'cold');

	} else if (temp <= 50) {

		$('body').attr('class', 'cool');

	} else if (temp <= 70) {

		$('body').attr('class', 'warm');

	} else {

		$('body').attr('class', 'hot');

	}
}
