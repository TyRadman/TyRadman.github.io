document.addEventListener("DOMContentLoaded", function() {
  const videos = document.querySelectorAll('.video-webm');
  const images = document.querySelectorAll('.overlay-image');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const videoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting)
      {
        const video = entry.target;

        if (!video.src)
        {
          const videoSource = video.getAttribute('data-src');

          if (videoSource)
          {
            video.src = videoSource;
            video.load(); // Load the video
            video.addEventListener('canplaythrough', function() {
              this.classList.add('loaded');  // Mark the video as loaded
              this.play();  // Play the video
            }, { once: true });
          }
          else
          {
            // No 'data-src', ensure 'loaded' class is added if not already present
            if (!video.classList.contains('loaded'))
            {
              video.classList.add('loaded');
            }

            video.play();
          }
        }
        else
        {
          video.play();
        }
      }
      else if (!entry.isIntersecting && entry.target.src)
      {
        entry.target.pause();
      }
    });
  }, options);

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting)
      {
        const img = entry.target;
        const imgSource = img.getAttribute('data-src');

        if (imgSource && !img.src)
        {
          img.src = imgSource;  // Set the actual image source from 'data-src'
          img.onload = () => {
            img.classList.add('loaded');
          };
        }

        if(img.src)
        {
          if (!img.classList.contains('loaded'))
          {
            img.classList.add('loaded');
          }
        }
      }
    });
  }, options);

  videos.forEach(video => {
    videoObserver.observe(video);
  });
  images.forEach(image => {
    imageObserver.observe(image);
  });
});

// page logic
function loadMedia(divId) {

  // disable the scroll
  toggleScroll(false);

  // display the loading screen
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.classList.add('show');
  loadingScreen.classList.remove('hide');


  const container = document.getElementById(divId);
  const mediaElements = container.querySelectorAll('[data-src]');
  const progressBar = document.getElementById('progress-bar');

  let totalMedia = mediaElements.length;
  let loadedMedia = 0;

  mediaElements.forEach(media => {
    const src = media.getAttribute('data-src');
    if (media.tagName.toLowerCase() === 'img') {
      media.src = src;
      media.onload = () => updateProgress();
      media.onerror = () => updateProgress(); // Optionally handle errors
    } else if (media.tagName.toLowerCase() === 'video') {
      media.src = src;
      media.onloadeddata = () => updateProgress();
      media.onerror = () => updateProgress(); // Optionally handle errors
    }
  });

  function updateProgress() {
    loadedMedia++;
    const percentLoaded = (loadedMedia / totalMedia) * 100;
    progressBar.style.width = `${percentLoaded}%`;

    if (loadedMedia === totalMedia) {
      loadingScreen.classList.remove('show');
      loadingScreen.classList.add('hide');
      toggleScroll(true);
    }
  }
}

function toggleScroll(enable) {
  // Define the function that prevents scrolling
  function preventScroll(event) {
    if (event.deltaY != 0) {  // Check if there is vertical scroll
      event.preventDefault();  // Prevent the default scroll behavior
    }
  }

  // If enable is false, add the event listener to disable scroll
  if (!enable) {
    document.addEventListener('wheel', preventScroll, {passive: false});
  } else {
    // If enable is true, remove the event listener to allow scroll
    document.removeEventListener('wheel', preventScroll, {passive: false});
  }
}

