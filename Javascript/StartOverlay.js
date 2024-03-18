
document.addEventListener('DOMContentLoaded', function(){
  let startButton = document.getElementById('startButton');
  // let startButton = document.getElementsByClassName('startButton');
  let siteButton = document.getElementById('websiteButton');
  let overlayPanel = document.getElementById('initialOverlay');

  startButton.addEventListener('click', function(){
    overlayPanel.classList.add('inactive');
  }, {once: true});

  siteButton.addEventListener('click', function(){
    window.location.href = 'https://timportfoliocom.wordpress.com/';
  }, {once: true})

})