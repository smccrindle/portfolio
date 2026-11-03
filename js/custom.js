// CUSTOM INTERACTIVE FEATURES

// Back to top button

// Grab the HTML element that will be used for the button
const backToTopBtn = document.getElementById('backToTop');
// Tell the browser that when the screen is scrolled, do something
window.addEventListener('scroll', () => {
	// If the user has scrolled down at least 600px, show the button
	if (window.scrollY > 600) {
		// Show button by swapping d-none for d-flex
		backToTopBtn.classList.remove('d-none');
		backToTopBtn.classList.add('d-flex');
	} else {
		// Hide button when near the top
		backToTopBtn.classList.remove('d-flex');
		backToTopBtn.classList.add('d-none');
	}
});