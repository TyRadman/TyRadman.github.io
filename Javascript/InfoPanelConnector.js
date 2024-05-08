const activeTag = 'active';
const inactiveTag = 'inactive';
const blurBackgroundID = 'blur-backgroud';

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
  let panelTopOpen = document.getElementById(panelName);
  // panelTopOpen.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  panelTopOpen.classList.remove(inactiveTag);//.classname = '';
  panelTopOpen.classList.add(activeTag);
  // the blur effect
  document.getElementById(blurBackgroundID).classList.remove(inactiveTag);
  document.getElementById(blurBackgroundID).classList.add(activeTag);
}

window.addEventListener("message", function(event) {
  if (event.data.message == 'close')
  {
    console.log(event.data.message);
    closeOverlay(event.data.panelName);
  }
}, false);

function closeOverlay(panelName){
  // document.getElementById(panelName).className = '';
  document.getElementById(panelName).classList.remove(activeTag);
  document.getElementById(panelName).classList.add(inactiveTag);
  // the blur effect
  document.getElementById(blurBackgroundID).classList.remove(activeTag);
  document.getElementById(blurBackgroundID).classList.add(inactiveTag);
}