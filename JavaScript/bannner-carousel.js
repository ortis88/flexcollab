$(document).ready(function() {
    startCarousel();

    function startCarousel() {
      let currentIndex = 0;
      const totalImages = $('.sliding-img').length;

      function showNextImage() {
        $('.sliding-img').eq(currentIndex).fadeOut();

        currentIndex = (currentIndex + 1) % totalImages;

        $('.sliding-img').eq(currentIndex).fadeIn();
        setTimeout(showNextImage, 3000);
      }

      $('.sliding-img').eq(currentIndex).fadeIn();
      setTimeout(showNextImage, 3000);
    }
  });