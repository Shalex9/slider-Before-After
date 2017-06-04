jQuery(document).ready(function ($) {

  $('.slider').mySlider();

  $('.container-preview').beforeAfter();

  $('input[type=range]').range({
    onSlide: function (rangeValue) {
      $('.handle').css('left', rangeValue + '%');
      $('.resize-box').css('width', rangeValue + '%');
    }
  });

  $('.sprite-see').click(function () {
    $('.handle').css('display', 'none');
    $('.resize-box').css('display', 'none');
    $('.after-img').css('border', 'none');
    $("input[type=range]").attr('disabled', 'disabled');
  });

  $('.sprite-preview').click(function () {
    $('.handle').css('display', 'block');
    $('.resize-box').css('display', 'block');
    $('.after-img').css('border', 'none');
    $('input[type=range]').removeAttr('disabled');
  });

  $('.sprite-cut').click(function () {
    $('.handle').css('display', 'none');
    $('.resize-box').css('display', 'none');
    $('.after-img').css({ 'border': '3px dashed white', 'boxSizing': 'border-box' });
    $("input[type=range]").attr('disabled', 'disabled');
  });

  $(".dropdown").mouseenter(function () {
    $('.nav').slideDown(200).animate({ backgroundColor: '#434651' }, 400);
  }).mouseleave(function () {
    $('.nav').slideUp(200).animate({ backgroundColor: '#7d818b' }, 400);
  });

  $('.brightness').click(function () {
    $('.after-img').css('filter', 'brightness(140%)');
  });
  $('.contrast').click(function () {
    $('.after-img').css('filter', 'contrast(140%)');
  });
  $('.grayscale').click(function () {
    $('.after-img').css('filter', 'grayscale(100%)');
  });
  $('.custom').click(function () {
    $('.after-img').css('filter', 'brightness(140%) contrast(140%)');
  });

  $('.to-preview').click(function () {
    var urlImg = $(this).attr('src');
    $(this).parent().css('border', '3px solid #9adb4d');
    $(this).parent().siblings().css('border', '3px solid transparent');
    $('.before-img, .after-img').css({ 'backgroundImage': 'url("' + urlImg + '")' });
  });

  $('.tool').click(function () {
    $(this).addClass('active');
    if ($(this).siblings().hasClass('active')) {
      $(this).siblings().removeClass('active');
    }
  });
});