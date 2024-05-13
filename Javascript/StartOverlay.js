document.addEventListener('DOMContentLoaded', function () {
  let startButton = document.getElementById('startButton');
  // let startButton = document.getElementsByClassName('startButton');
  let siteButton = document.getElementById('websiteButton');
  let overlayPanel = document.getElementById('initial-overlay');

  startButton.addEventListener('click', function () {
    if (isDesktop()) {
      overlayPanel.classList.add('inactive');
    } else {
      window.location.href = 'https://timportfoliocom.wordpress.com/';
    }
  }, {once: true});

  // siteButton.addEventListener('click', function () {
  //   window.location.href = 'https://timportfoliocom.wordpress.com/';
  // }, {once: true})
  document.querySelectorAll('.start-icon').forEach(icon => {
    icon.addEventListener('mouseover', function () {
      const iconTextDisplayer = document.getElementById('icon-text-displayer');
      const description = this.getAttribute('data-icon');
      iconTextDisplayer.textContent = description;
      iconTextDisplayer.classList.remove('Hidden');
      iconTextDisplayer.classList.add('Shown');
    });

    icon.addEventListener('mouseout', function() {
      const iconTextDisplayer = document.getElementById('icon-text-displayer');
      iconTextDisplayer.classList.remove('Shown');
      iconTextDisplayer.classList.add('Hidden');
    });
  });

})

function isDesktop() {
  // A simple check for mobile devices; there are more comprehensive ways to do this.
  const userAgent = navigator.userAgent.toLowerCase();
  return !(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent));
}

// for filling the icons text displayer
document.querySelectorAll('.start-icon').forEach(icon => {
  icon.addEventListener('mouseover', function () {
    const description = this.getAttribute('data-icon');
    document.getElementById('icon-text-displayer').textContent = description;
    console.log('mouse entered');
  });

  icon.addEventListener('mouseout', function() {
    document.getElementById('icon-text-displayer').textContent = 'Hover over an icon to see the tool description.';
    console.log('mouse exited');
  });
});


