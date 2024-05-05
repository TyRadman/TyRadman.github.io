document.addEventListener("DOMContentLoaded", function()
{
  // look for all the elements that are tagged 'video-webm'
  const videos = document.querySelectorAll('.video-webm');
  const images = document.querySelectorAll('.overlay-image');
  const options =
      {
    root: null,
    rootMargin: '0px',
        // how much of the screen should be visible before the event is called
    threshold: 0.2
  };

  const videoObserver = new IntersectionObserver((entries, observer) =>
  {
    entries.forEach(entry =>
    {
      if (entry.isIntersecting)
      {
        if (!entry.target.src)
        {
          const video = entry.target;
          const videoSource = video.getAttribute('data-src');

          if (!videoSource)
          {
            return;
          }

          video.src = videoSource;
          video.load(); // Load the video
          video.play(); // Play when loaded and visible

          video.addEventListener('canplaythrough', function() {
            this.classList.add('loaded');  // Mark the video as loaded
            this.play();  // Play the video
          }, { once: true });

          // entry.target.classList.add('loaded');
        }
        else
        {
          entry.target.play();
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

        // Check if the 'data-src' attribute exists and the image hasn't been loaded yet
        const imgSource = img.getAttribute('data-src');
        if (imgSource && !img.src)
        {
          img.src = imgSource;  // Set the actual image source from 'data-src'

          img.onload = () =>
          {
            img.classList.add('loaded');
          };
        }
      }
    });
  }, options);

  videos.forEach(video =>
  {
    videoObserver.observe(video);
  });
  images.forEach(image =>
  {
    imageObserver.observe(image);
  });
});
