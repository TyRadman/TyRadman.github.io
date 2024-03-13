console.log("Logic.js has loaded.");

window.addEventListener("message", function(event) {
  // It's good practice to verify the origin of the message for security purposes
  // For example, if your PlayCanvas app is hosted at "https://playcanv.as", you might check:
  // if (event.origin === "https://playcanv.as") {
    
  console.log("Message received:", event.data);
  if (event.data.title && event.data.description) {
      updateOverlay(event.data.title, event.data.description);
  }
  //}
}, false);

function updateOverlay(title, description) {
  document.getElementById('objectTitle').textContent = title;
  document.getElementById('objectDescription').textContent = description;
  document.getElementById('overlay').style.display = 'block';
}