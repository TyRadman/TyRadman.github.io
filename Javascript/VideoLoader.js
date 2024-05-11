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
      if (entry.isIntersecting) {
        const img = entry.target;
        const imgSource = img.getAttribute('data-src');
        if (imgSource && !img.src) {
          img.src = imgSource;  // Set the actual image source from 'data-src'
          img.onload = () => {
            img.classList.add('loaded');
          };
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
