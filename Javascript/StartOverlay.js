
document.addEventListener('DOMContentLoaded', function(){
  let startButton = document.getElementById('startGameButton');
  let siteButton = document.getElementById('siteButton');
  let overlayPanel = document.getElementById('initialOverlay');

  startButton.addEventListener('click', function(){
    overlayPanel.classList.add('inactive');
  }, {once: true});

  siteButton.addEventListener('click', function(){
    window.location.href = 'https://timportfoliocom.wordpress.com/';
  }, {once: true})

})