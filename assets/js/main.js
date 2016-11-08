$(function(){
  // Header fade up/down on scroll controls
  var hideHeader = 100;
  var showHeader = 99;
  var $this = $('.navbar');
  $(window).on("scroll", function() {
  if ($(window).scrollTop() >= hideHeader) {
      $this.addClass('hide-header').removeClass('show-header');
    } else if ($(window).scrollTop() <= showHeader) {
      $this.addClass('show-header').removeClass('hide-header');
    }
  });
  // Scroll to section on page
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if(target) {
      event.preventDefault();
      if (target[0].id != 'top') {
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 85
        }, 1000);
      } else {
        $('html, body').stop().animate({
          scrollTop: 0
        }, 800);
      }
    }
  });
  // Automatically close Bootstrap Nav
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });
});




