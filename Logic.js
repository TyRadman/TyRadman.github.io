// Function to display the overlay with title and description
function displayOverlay(title, description) {
  document.getElementById('objectTitle').innerText = title;
  document.getElementById('objectDescription').innerText = description;
  document.getElementById('overlay').style.display = 'block';
}

// Close the overlay when clicked
document.getElementById('overlay').addEventListener('click', function() {
  this.style.display = 'none';
});

// Embedding PlayCanvas App
window.addEventListener('load', function() {
  var canvas = document.getElementById('playcanvas-canvas');
  // Replace 'YOUR_APP_ID' with your actual PlayCanvas app id and 'YOUR_ACCESS_TOKEN' with your access token
  var config = {
      app_id: 'YOUR_APP_ID',
      access_token: 'YOUR_ACCESS_TOKEN',
  };
  // The script URL below should be replaced with the actual URL of your PlayCanvas application
  var script = document.createElement('script');
  script.src = 'https://playcanvas.com/api/assets/files/PlayCanvasLoader.js';
  document.body.appendChild(script);

  script.onload = function() {
      PlayCanvasLoader.start(canvas, config);
  };
});