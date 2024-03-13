//console.log("Logic.js has loaded.");

window.addEventListener("message", function(event) {    
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

window.addEventListener("message", function(event) {
  console.log("Message received:", event.data);
  if (event.data.action === "Close") {
    updateOverlay(); // Call updateOverlay without parameters
  }
}, false);

function closeOverlay(){
  document.getElementById('overlay').style.display = 'none';
}