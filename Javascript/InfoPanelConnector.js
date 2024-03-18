//console.log("Logic.js has loaded.");
// Widow panel: 'widowPanel'
const activeTag = 'active';
const inactiveTag = 'inactive';

window.addEventListener("message", function(event) {    
  console.log("Message received:", event.data);
  if (event.data.panelName && event.data.message == 'open') {
    openOverlay(event.data.panelName);
      console.log(event.data.message);
  }
  //}
}, false);

function openOverlay(panelName) {
  // enable the panel
  document.getElementById(panelName).className = '';
  document.getElementById(panelName).classList.add(activeTag);
}

window.addEventListener("message", function(event) {
  if (event.data.message == 'close') {
    console.log(event.data.message);
    closeOverlay(event.data.panelName);
  }
}, false);

function closeOverlay(panelName){
  document.getElementById(panelName).className = '';
  document.getElementById(panelName).classList.add(inactiveTag);
  // document.getElementById('overlay').style.display = 'none';
}