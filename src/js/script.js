jQuery(document).ready(function($){

  //Before-After
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


    //slider-images

    $.fn.mySlider = function(options) {

        var options = {
          maxWidth: '275px'
        };

        $('.carousel-element img').css({ 'max-width' : options.maxWidth });

        var leftButton = $('.carousel-arrive-left');
        var rightButton = $('.carousel-arrive-right');
        var elementsList = $('.carousel-list');

        var pixelsOffset = 306;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
        var maximumOffset = 0;

        leftButton.click(function() {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 306;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }
        });

        rightButton.click(function() {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 306;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }
        });

        return this;
    }

    //slider-init
    $('.slider').mySlider();

    //show image to preview
    $('.to-preview').click(function() {
      var urlImg = $(this).attr('src');
      $(this).parent().css('border', '3px solid #9adb4d');
      $(this).parent().siblings().css('border', '3px solid transparent');
      $('.before-img, .after-img').css({'backgroundImage' : 'url("'+ urlImg +'")'});
    });

    $('.tool').click(function() {
      $(this).toggleClass('active');
      if($(this).siblings().hasClass('active')) {$(this).siblings().removeClass('active')}

    })

});
