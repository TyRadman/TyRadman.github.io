document.addEventListener("DOMContentLoaded", function()
{
  // look for all the elements that are tagged 'video-webm'
  const videos = document.querySelectorAll('.video-webm');
  const options =
      {
    root: null,
    rootMargin: '0px',
        // how much of the screen should be visible before the event is called
    threshold: 0.5
  };

  const videoObserver = new IntersectionObserver((entries, observer) =>
  {
    entries.forEach(entry =>
    {
      if (entry.isIntersecting)
      {
        if (!entry.target.src)
        {
          const videoSource = entry.target.getAttribute('data-src');

          if (!videoSource)
          {
            return;
          }

          entry.target.src = videoSource;
          entry.target.load(); // Load the video
          entry.target.play(); // Play when loaded and visible
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

  videos.forEach(video =>
  {
    videoObserver.observe(video);
  });
});
