window.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.gallery img');
  
    function lazyLoad() {
      images.forEach(function(img) {
        if (img.getBoundingClientRect().top <= window.innerHeight && img.getAttribute('data-src')) {
          img.src = img.getAttribute('data-src');
          img.onload = function() {
            img.classList.add('loaded');
            img.removeAttribute('data-src');
          };
        }
      });
    }
  
    lazyLoad();
    window.addEventListener('scroll', lazyLoad);
  });
  