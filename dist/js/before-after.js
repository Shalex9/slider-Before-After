(function( $ ) {
  
  var dragging = false,
      scrolling = false,
      resizing = false;
  var imageComparisonContainers = $('.container-preview');
  checkPosition(imageComparisonContainers);

  imageComparisonContainers.each(function(){
      var actual = $(this);
      drags(actual.find('.handle'), actual.find('.resize-box'), actual);
  });

  function checkPosition(container) {
      container.each(function(){
          var actualContainer = $(this);
          if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
              actualContainer.addClass('is-visible');
          }
      });
      scrolling = false;
  }

  function drags(dragElement, resizeElement, container) {
      dragElement.on("mousedown vmousedown", function(e) {
          dragElement.addClass('draggable');
          resizeElement.addClass('resizable');

          var dragWidth = dragElement.outerWidth(),
              xPosition = dragElement.offset().left + dragWidth - e.pageX,
              containerOffset = container.offset().left,
              containerWidth = container.outerWidth(),
              minLeft = containerOffset + 10,
              maxLeft = containerOffset + containerWidth - dragWidth - 10;

          dragElement.parents().on("mousemove vmousemove", function(e) {
              if( !dragging) {
                  dragging =  true;
                  ( !window.requestAnimationFrame )
                      ? setTimeout(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement);}, 100)
                      : requestAnimationFrame(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement);});
              }
          }).on("mouseup vmouseup", function(e){
              dragElement.removeClass('draggable');
              resizeElement.removeClass('resizable');
          });
          e.preventDefault();
      }).on("mouseup vmouseup", function(e) {
          dragElement.removeClass('draggable');
          resizeElement.removeClass('resizable');
      });
  }

  function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement) {
      var leftValue = e.pageX + xPosition - dragWidth;
      if(leftValue < minLeft ) {
          leftValue = minLeft;
      } else if ( leftValue > maxLeft) {
          leftValue = maxLeft;
      }

      var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';

      $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
          $(this).removeClass('draggable');
          resizeElement.removeClass('resizable');
      });

      $('.resizable').css('width', widthValue);
      dragging =  false;
  }

})( jQuery );
