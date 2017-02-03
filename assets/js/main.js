$(function(){
  $(document).on('scroll', function(){
    var top = window.pageYOffset || document.documentElement.scrollTop;
    var navChange = 100;
    if (top >= navChange) {
      console.log(top)
      $('.navbar-brand').addClass('transparent');
      $('.navbar-default').addClass('darken');
      $('.nav-anchor').addClass('wht');
      return false;
    } else if(top < navChange) {
      console.log(top)
      $('.navbar-brand').removeClass('transparent');
      $('.navbar-default').removeClass('darken');
      $('.nav-anchor').removeClass('wht');
      return false;
    }
  })
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




