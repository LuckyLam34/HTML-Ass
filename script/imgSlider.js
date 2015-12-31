
//banner image slider & welcome section slider

//detect browser
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");

$(window).load(function() {
  $('#slider').nivoSlider({
    effect: 'fade',
    controlNav: checkIE(),
    slices: 1
  });

  setTimeout(function(){
      $('#slider1').nivoSlider({ 
        pauseTime:5000, 
        
        pauseOnHover:false 
      });
  }, 1000);
});

//partners img slider
$(document).ready(function(){
  $('.slider2').bxSlider({
    slideWidth: 128,
    minSlides: 2,
    maxSlides: 3,
    slideMargin: 10,
    auto: true,
    pager: false
  });
});

//msie > 0 -> IE
function checkIE() {
  return !(msie > 0);
}