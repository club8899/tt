
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


$(document).ready(function() {

  /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    $('body').vegas({
        slides: [
            { src: 'slide-1.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });
  });
      

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

