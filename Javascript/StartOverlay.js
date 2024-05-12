
document.addEventListener('DOMContentLoaded', function(){
  let startButton = document.getElementById('startButton');
  // let startButton = document.getElementsByClassName('startButton');
  let siteButton = document.getElementById('websiteButton');
  let overlayPanel = document.getElementById('initial-overlay');

  startButton.addEventListener('click', function(){
    if(isDesktop())
    {
      overlayPanel.classList.add('inactive');
    }
    else
    {
      window.location.href = 'https://timportfoliocom.wordpress.com/';
    }
  }, {once: true});

  siteButton.addEventListener('click', function(){
    window.location.href = 'https://timportfoliocom.wordpress.com/';
  }, {once: true})

})

function isDesktop() {
  // A simple check for mobile devices; there are more comprehensive ways to do this.
  const userAgent = navigator.userAgent.toLowerCase();
  return !( /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent) );
}
