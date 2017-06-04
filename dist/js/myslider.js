(function( $ ){

  // create: by me(Shevchuk Alexandr)

  $.fn.mySlider = function() {

      $('.carousel-element img').css({ 'max-width' : '230px' });

      var leftButton = $('.carousel-arrive-left');
      var rightButton = $('.carousel-arrive-right');
      var elementsList = $('.carousel-list');

      var pixelsOffset = 256;
      var currentLeftValue = 0;
      var elementsCount = elementsList.find('li').length;
      var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
      var maximumOffset = 0;

      leftButton.click(function() {
          if (currentLeftValue != maximumOffset) {
              currentLeftValue += pixelsOffset;
              elementsList.animate({ left : currentLeftValue + "px"}, 500);
          }
      });

      rightButton.click(function() {
          if (currentLeftValue != minimumOffset) {
              currentLeftValue -= pixelsOffset;
              elementsList.animate({ left : currentLeftValue + "px"}, 500);
          }
      });

      return this;
  }

})( jQuery );
