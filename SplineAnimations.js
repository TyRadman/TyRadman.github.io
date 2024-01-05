const splineContainer = document.querySelector('.spline-container');
const imageOverlay = document.querySelector('.image-overlay');

// Add an event listener to the Spline object
splineContainer.addEventListener('click', function() {
    // Display the image overlay
    imageOverlay.style.display = 'block';
});

function closeOverlay() {
  imageOverlay.style.display = 'none';
}