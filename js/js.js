// start smooth scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')&& 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
//end smooth scroll
//filterizr 
var filterizd = $('#portfolio .row').filterizr({

   // options here

});
//testimonial
$('.owl-carousel').owlCarousel({
    loop: true,
    
    nav: true,
    animateOut: 'flipOutX',
    animateIn: 'zoomInUp',
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
    singleItem: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//counter
jQuery(document).ready(function($) {
$('.counter').counterUp({
 delay: 10,
 time: 1000
 });
});
//map
var map;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8
});
};
//arrow
$('#btn1').mouseenter(function(){
    $('#btn1 i').css({
        opacity:1
    });
    $('#btn1 i').addClass('slideInRight');
});
$('#btn1').mouseleave(function(){
    $('#btn1 i').css({
        opacity:0
    });
    $('#btn1 i').removeClass('slideInRight');
});

$('#btn2').mouseenter(function(){
    $('#btn2 i').css({
        opacity:1
    });
    $('#btn2 i').addClass('slideInRight');
});
$('#btn2').mouseleave(function(){
    $('#btn2 i').css({
        opacity:0
    });
    $('#btn2 i').removeClass('slideInRight');
});


$('#btn3').mouseenter(function(){
    $('#btn3 i').css({
        opacity:1
    });
    $('#btn3 i').addClass('slideInRight');
});
$('#btn3').mouseleave(function(){
    $('#btn3 i').css({
        opacity:0
    });
    $('#btn3 i').removeClass('slideInRight');
});


$('#btn4').mouseenter(function(){
    $('#btn4 i').css({
        opacity:1
    });
    $('#btn4 i').addClass('slideInRight');
});
$('#btn4').mouseleave(function(){
    $('#btn4 i').css({
        opacity:0
    });
    $('#btn4 i').removeClass('slideInRight');
});
//navbar
$(window).scroll( function(){
    if($(window).scrollTop() > 50){
        $('.navbar').css({
            backgroundColor: '#4B4B4B'
        });
        $('.totop').css({
            opacity:1
        });
    }else{
        $('.navbar').css({
            backgroundColor: '#4B4B4B'
        });
        $('.totop').css({
           opacity:0
        });
    }
});
//loader
// Wait for window load
$(document).ready(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
});
