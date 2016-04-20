// GLOBAL VARIABLES -------

// Store an array of image paths in a variable
var images=['images/image_1.jpg', 'images/image_2.jpg', 'images/image_3.jpg', 'images/image_4.jpg', 'images/image_5.jpg', 'images/image_6.jpg'];

// Set a variable for the current position(index) and give it an initial value of 0
var currentPosition = 0;

// Set an array for votes
var votes = [0,0,0,0,0,0];

// EVENTS ---------

// Listen for click events on the next and previous buttons
$('#next').on('click', nextImage);
$('#prev').on('click', previousImage);

// Listen for a change event on the #your-vote select menu
$('#upvote').on('click',function () {

	// Add one vote to the current score at the current index
	votes[currentPosition] += 1;

	// Display the amount of likes on the page.
	$('#votes').html("Likes: " + votes[currentPosition]);
});

$('#downvote').on('click',function () {

	// Subtract one vote from the score at the current position.
	votes[currentPosition] -= 1;

	// Display the amount of likes on the page.
	$('#votes').html("Likes: " + votes[currentPosition]);
});


// FUNCTIONS ---------

function nextImage(){
	// Update the current position
	currentPosition += 1;

	//Make sure the previous button is enabled
	$('#prev').prop('disabled', false);

	// Update source, clear out select menu
	changeImage();

	// If the currentPosition is at the last image
 	if (currentPosition === images.length - 1) {
 		// Disable the next button
		$('#next').prop('disabled', true);
		// Calculate votes
	}
}

function previousImage(){
	// Update the current position
	currentPosition -= 1;

	// Make sure the next button is enabled
	$('#next').prop('disabled', false);

	// Update the source and empty out the #your-vote select menu
	changeImage();

	// If the currentPosition is at the first item (the zero index), disable the previous button
	if (currentPosition === 0 ) {
		$('#prev').prop('disabled', true);
	}
}

function changeImage(){
	// Update the src attribute to the urls that's stored at the currentPosition in the array
	$('#image-to-vote-on').attr('src', images[currentPosition]);

	// Display the amount of likes for the current image.
	$('#votes').html("Likes: " + votes[currentPosition]);
}