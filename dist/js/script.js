jQuery(document).ready(function(e){function s(e,s,t){e.on("mousedown vmousedown",function(o){e.addClass("draggable"),s.addClass("resizable");var n=e.outerWidth(),r=e.offset().left+n-o.pageX,l=t.offset().left,u=t.outerWidth(),c=l+10,d=l+u-n-10;e.parents().on("mousemove vmousemove",function(e){a||(a=!0,window.requestAnimationFrame?requestAnimationFrame(function(){i(e,r,n,c,d,l,u,s)}):setTimeout(function(){i(e,r,n,c,d,l,u,s)},100))}).on("mouseup vmouseup",function(i){e.removeClass("draggable"),s.removeClass("resizable")}),o.preventDefault()}).on("mouseup vmouseup",function(i){e.removeClass("draggable"),s.removeClass("resizable")})}function i(s,i,t,o,n,r,l,u){var c=s.pageX+i-t;c<o?c=o:c>n&&(c=n);var d=100*(c+t/2-r)/l+"%";e(".draggable").css("left",d).on("mouseup vmouseup",function(){e(this).removeClass("draggable"),u.removeClass("resizable")}),e(".resizable").css("width",d),a=!1}var a=!1,t=!1,o=e(".container-preview");!function(s){s.each(function(){var s=e(this);e(window).scrollTop()+.5*e(window).height()>s.offset().top&&s.addClass("is-visible")}),t=!1}(o),o.each(function(){var i=e(this);s(i.find(".handle"),i.find(".resize-box"),i)}),e.fn.mySlider=function(s){var s={maxWidth:"275px"};e(".carousel-element img").css({"max-width":s.maxWidth});var i=e(".carousel-arrive-left"),a=e(".carousel-arrive-right"),t=e(".carousel-list"),o=0,n=t.find("li").length,r=-306*(n-4);return i.click(function(){0!=o&&(o+=306,t.animate({left:o+"px"},500))}),a.click(function(){o!=r&&(o-=306,t.animate({left:o+"px"},500))}),this},e(".slider").mySlider(),e(".to-preview").click(function(){var s=e(this).attr("src");e(this).parent().css("border","3px solid #9adb4d"),e(this).parent().siblings().css("border","3px solid transparent"),e(".before-img, .after-img").css({backgroundImage:'url("'+s+'")'})}),e(".tool").click(function(){e(this).toggleClass("active"),e(this).siblings().hasClass("active")&&e(this).siblings().removeClass("active")})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsImRyYWdzIiwiZHJhZ0VsZW1lbnQiLCJyZXNpemVFbGVtZW50IiwiY29udGFpbmVyIiwib24iLCJlIiwiYWRkQ2xhc3MiLCJkcmFnV2lkdGgiLCJvdXRlcldpZHRoIiwieFBvc2l0aW9uIiwib2Zmc2V0IiwibGVmdCIsInBhZ2VYIiwiY29udGFpbmVyT2Zmc2V0IiwiY29udGFpbmVyV2lkdGgiLCJtaW5MZWZ0IiwibWF4TGVmdCIsInBhcmVudHMiLCJkcmFnZ2luZyIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGVEcmFnZ2VkSGFuZGxlIiwic2V0VGltZW91dCIsInJlbW92ZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJsZWZ0VmFsdWUiLCJ3aWR0aFZhbHVlIiwiY3NzIiwidGhpcyIsInNjcm9sbGluZyIsImltYWdlQ29tcGFyaXNvbkNvbnRhaW5lcnMiLCJlYWNoIiwiYWN0dWFsQ29udGFpbmVyIiwic2Nyb2xsVG9wIiwiaGVpZ2h0IiwidG9wIiwiYWN0dWFsIiwiZmluZCIsImZuIiwibXlTbGlkZXIiLCJvcHRpb25zIiwibWF4V2lkdGgiLCJtYXgtd2lkdGgiLCJsZWZ0QnV0dG9uIiwicmlnaHRCdXR0b24iLCJlbGVtZW50c0xpc3QiLCJjdXJyZW50TGVmdFZhbHVlIiwiZWxlbWVudHNDb3VudCIsImxlbmd0aCIsIm1pbmltdW1PZmZzZXQiLCJjbGljayIsImFuaW1hdGUiLCJ1cmxJbWciLCJhdHRyIiwicGFyZW50Iiwic2libGluZ3MiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBT0MsVUFBVUMsTUFBTSxTQUFVQyxHQXdCN0IsUUFBU0MsR0FBTUMsRUFBYUMsRUFBZUMsR0FDdkNGLEVBQVlHLEdBQUcsdUJBQXdCLFNBQVVDLEdBQzdDSixFQUFZSyxTQUFT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LGdCQUFtQixRQUFVSixFQUFTLFNBRzdFckQsRUFBRSxTQUFTbUQsTUFBTSxXQUNibkQsRUFBRTZCLE1BQU02QixZQUFZLFVBQ2hCMUQsRUFBRTZCLE1BQU0yQixXQUFXRyxTQUFTLFdBQzVCM0QsRUFBRTZCLE1BQU0yQixXQUFXaEMsWUFBWSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG5cbiAgICAvL0JlZm9yZS1BZnRlclxuICAgIHZhciBkcmFnZ2luZyA9IGZhbHNlLFxuICAgICAgICBzY3JvbGxpbmcgPSBmYWxzZSxcbiAgICAgICAgcmVzaXppbmcgPSBmYWxzZTtcbiAgICB2YXIgaW1hZ2VDb21wYXJpc29uQ29udGFpbmVycyA9ICQoJy5jb250YWluZXItcHJldmlldycpO1xuICAgIGNoZWNrUG9zaXRpb24oaW1hZ2VDb21wYXJpc29uQ29udGFpbmVycyk7XG5cbiAgICBpbWFnZUNvbXBhcmlzb25Db250YWluZXJzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYWN0dWFsID0gJCh0aGlzKTtcbiAgICAgICAgZHJhZ3MoYWN0dWFsLmZpbmQoJy5oYW5kbGUnKSwgYWN0dWFsLmZpbmQoJy5yZXNpemUtYm94JyksIGFjdHVhbCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjaGVja1Bvc2l0aW9uKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWN0dWFsQ29udGFpbmVyID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCkgKiAwLjUgPiBhY3R1YWxDb250YWluZXIub2Zmc2V0KCkudG9wKSB7XG4gICAgICAgICAgICAgICAgYWN0dWFsQ29udGFpbmVyLmFkZENsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzY3JvbGxpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFncyhkcmFnRWxlbWVudCwgcmVzaXplRWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgIGRyYWdFbGVtZW50Lm9uKFwibW91c2Vkb3duIHZtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGRyYWdFbGVtZW50LmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcbiAgICAgICAgICAgIHJlc2l6ZUVsZW1lbnQuYWRkQ2xhc3MoJ3Jlc2l6YWJsZScpO1xuXG4gICAgICAgICAgICB2YXIgZHJhZ1dpZHRoID0gZHJhZ0VsZW1lbnQub3V0ZXJXaWR0aCgpLFxuICAgICAgICAgICAgICAgIHhQb3NpdGlvbiA9IGRyYWdFbGVtZW50Lm9mZnNldCgpLmxlZnQgKyBkcmFnV2lkdGggLSBlLnBhZ2VYLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lck9mZnNldCA9IGNvbnRhaW5lci5vZmZzZXQoKS5sZWZ0LFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLm91dGVyV2lkdGgoKSxcbiAgICAgICAgICAgICAgICBtaW5MZWZ0ID0gY29udGFpbmVyT2Zmc2V0ICsgMTAsXG4gICAgICAgICAgICAgICAgbWF4TGVmdCA9IGNvbnRhaW5lck9mZnNldCArIGNvbnRhaW5lcldpZHRoIC0gZHJhZ1dpZHRoIC0gMTA7XG5cbiAgICAgICAgICAgIGRyYWdFbGVtZW50LnBhcmVudHMoKS5vbihcIm1vdXNlbW92ZSB2bW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICAgICAgICAgICAgICBkcmFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlRHJhZ2dlZEhhbmRsZShlLCB4UG9zaXRpb24sIGRyYWdXaWR0aCwgbWluTGVmdCwgbWF4TGVmdCwgY29udGFpbmVyT2Zmc2V0LCBjb250YWluZXJXaWR0aCwgcmVzaXplRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCkgOiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZURyYWdnZWRIYW5kbGUoZSwgeFBvc2l0aW9uLCBkcmFnV2lkdGgsIG1pbkxlZnQsIG1heExlZnQsIGNvbnRhaW5lck9mZnNldCwgY29udGFpbmVyV2lkdGgsIHJlc2l6ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5vbihcIm1vdXNldXAgdm1vdXNldXBcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBkcmFnRWxlbWVudC5yZW1vdmVDbGFzcygnZHJhZ2dhYmxlJyk7XG4gICAgICAgICAgICAgICAgcmVzaXplRWxlbWVudC5yZW1vdmVDbGFzcygncmVzaXphYmxlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSkub24oXCJtb3VzZXVwIHZtb3VzZXVwXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBkcmFnRWxlbWVudC5yZW1vdmVDbGFzcygnZHJhZ2dhYmxlJyk7XG4gICAgICAgICAgICByZXNpemVFbGVtZW50LnJlbW92ZUNsYXNzKCdyZXNpemFibGUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZURyYWdnZWRIYW5kbGUoZSwgeFBvc2l0aW9uLCBkcmFnV2lkdGgsIG1pbkxlZnQsIG1heExlZnQsIGNvbnRhaW5lck9mZnNldCwgY29udGFpbmVyV2lkdGgsIHJlc2l6ZUVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IGUucGFnZVggKyB4UG9zaXRpb24gLSBkcmFnV2lkdGg7XG4gICAgICAgIGlmIChsZWZ0VmFsdWUgPCBtaW5MZWZ0KSB7XG4gICAgICAgICAgICBsZWZ0VmFsdWUgPSBtaW5MZWZ0O1xuICAgICAgICB9IGVsc2UgaWYgKGxlZnRWYWx1ZSA+IG1heExlZnQpIHtcbiAgICAgICAgICAgIGxlZnRWYWx1ZSA9IG1heExlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgd2lkdGhWYWx1ZSA9IChsZWZ0VmFsdWUgKyBkcmFnV2lkdGggLyAyIC0gY29udGFpbmVyT2Zmc2V0KSAqIDEwMCAvIGNvbnRhaW5lcldpZHRoICsgJyUnO1xuXG4gICAgICAgICQoJy5kcmFnZ2FibGUnKS5jc3MoJ2xlZnQnLCB3aWR0aFZhbHVlKS5vbihcIm1vdXNldXAgdm1vdXNldXBcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZHJhZ2dhYmxlJyk7XG4gICAgICAgICAgICByZXNpemVFbGVtZW50LnJlbW92ZUNsYXNzKCdyZXNpemFibGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnJlc2l6YWJsZScpLmNzcygnd2lkdGgnLCB3aWR0aFZhbHVlKTtcbiAgICAgICAgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvL3NsaWRlci1pbWFnZXNcblxuICAgICQuZm4ubXlTbGlkZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcyNzVweCdcbiAgICAgICAgfTtcblxuICAgICAgICAkKCcuY2Fyb3VzZWwtZWxlbWVudCBpbWcnKS5jc3MoeyAnbWF4LXdpZHRoJzogb3B0aW9ucy5tYXhXaWR0aCB9KTtcblxuICAgICAgICB2YXIgbGVmdEJ1dHRvbiA9ICQoJy5jYXJvdXNlbC1hcnJpdmUtbGVmdCcpO1xuICAgICAgICB2YXIgcmlnaHRCdXR0b24gPSAkKCcuY2Fyb3VzZWwtYXJyaXZlLXJpZ2h0Jyk7XG4gICAgICAgIHZhciBlbGVtZW50c0xpc3QgPSAkKCcuY2Fyb3VzZWwtbGlzdCcpO1xuXG4gICAgICAgIHZhciBwaXhlbHNPZmZzZXQgPSAzMDY7XG4gICAgICAgIHZhciBjdXJyZW50TGVmdFZhbHVlID0gMDtcbiAgICAgICAgdmFyIGVsZW1lbnRzQ291bnQgPSBlbGVtZW50c0xpc3QuZmluZCgnbGknKS5sZW5ndGg7XG4gICAgICAgIHZhciBtaW5pbXVtT2Zmc2V0ID0gLSgoZWxlbWVudHNDb3VudCAtIDQpICogcGl4ZWxzT2Zmc2V0KTtcbiAgICAgICAgdmFyIG1heGltdW1PZmZzZXQgPSAwO1xuXG4gICAgICAgIGxlZnRCdXR0b24uY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRMZWZ0VmFsdWUgIT0gbWF4aW11bU9mZnNldCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRMZWZ0VmFsdWUgKz0gMzA2O1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzTGlzdC5hbmltYXRlKHsgbGVmdDogY3VycmVudExlZnRWYWx1ZSArIFwicHhcIiB9LCA1MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByaWdodEJ1dHRvbi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudExlZnRWYWx1ZSAhPSBtaW5pbXVtT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgY3VycmVudExlZnRWYWx1ZSAtPSAzMDY7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNMaXN0LmFuaW1hdGUoeyBsZWZ0OiBjdXJyZW50TGVmdFZhbHVlICsgXCJweFwiIH0sIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvL3NsaWRlci1pbml0XG4gICAgJCgnLnNsaWRlcicpLm15U2xpZGVyKCk7XG5cbiAgICAvL3Nob3cgaW1hZ2UgdG8gcHJldmlld1xuICAgICQoJy50by1wcmV2aWV3JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXJsSW1nID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ2JvcmRlcicsICczcHggc29saWQgIzlhZGI0ZCcpO1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY3NzKCdib3JkZXInLCAnM3B4IHNvbGlkIHRyYW5zcGFyZW50Jyk7XG4gICAgICAgICQoJy5iZWZvcmUtaW1nLCAuYWZ0ZXItaW1nJykuY3NzKHsgJ2JhY2tncm91bmRJbWFnZSc6ICd1cmwoXCInICsgdXJsSW1nICsgJ1wiKScgfSk7XG4gICAgfSk7XG5cbiAgICAkKCcudG9vbCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGlmICgkKHRoaXMpLnNpYmxpbmdzKCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiXX0=