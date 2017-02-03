/////////////////////////////////////
/// Trigger banner effect on page load
/////////////////////////////////////
$( window ).on('load', function() {
  console.log("triggered")
  $('.slide1-banner').addClass('load-trigger');

/////////////////////////////////////////
/// header fade up/down on scroll controls
/////////////////////////////////////////
  var hideHeader = 100;
  var showHeader = 99;
  var $this = $('.navbar');
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= hideHeader)
      $this.addClass('hide-header').removeClass('show-header');
    else if ($(window).scrollTop() <= showHeader){
      $this.removeClass('hide-header').addClass('show-header');
    }
  });


  var eTarget = $('.overlay');
  eTarget.hover(function(){
    $(this).find('.overlay-header').addClass('overlay-header-after');
    $(this).find('.location-link').addClass('location-link-after');
  }, function(){
    $(this).find('.overlay-header').removeClass('overlay-header-after');
    $(this).find('.location-link').removeClass('location-link-after');
  })

/////////////////////////////////////////
/// City links banner controls
/////////////////////////////////////////
  var cityDiv = $('.column');
  var span = $('span');
  var body = $('body');

  cityDiv.click(function() {
    if ($(this).find('span').hasClass('fa-chevron-down')) {
      $(this).find('span').removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('.banner-dropdown').css('max-height','430px').addClass('shadow');
    } else {
      $(this).find('span').removeClass('fa-chevron-up').addClass('fa-chevron-down');
      $(this).find('.banner-dropdown').css('max-height','0px').removeClass('shadow');
    }
  });
  cityDiv.hover(function(){
    $(this).find('.divider').css("width", "76%")
    }, function(){
     $(this).find('.divider').css("width", "50%")
  });
  $(document).on("click", function(e) {
    var target = e.target;

    if (!$(target).is($('.banner .col-md-12').find('*'))) {
      $('.banner-dropdown').css('max-height','0px').removeClass('shadow');
      $('.banner').find('span').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }
  });

/////////////////////////////////////////
/// Acordian Controls
/////////////////////////////////////////
  $('.accordion-trigger').on('click',function(){
    //Expand or collapse this panel
    $(this).next().slideToggle('fast');
    $(this).find('span').toggleClass('fa-minus');
    //Hide the other panels/trigger icons
    $(".accordion-content-container").not($(this).next()).slideUp('fast').parent().find('span').removeClass('fa-minus');
  });

/////////////////////////////////////////
/// Fancybox
/////////////////////////////////////////
  $('.fancybox').fancybox({
    'transitionIn' : 'elastic',
    'transitionOut' : 'fade',
    'width' : 680,
    'height' : 495,
    'modal': false
  });

/////////////////////////////////////////
/// DatePicker
/////////////////////////////////////////
$( "#datepicker" ).datepicker({
  'dateFormat' : 'mm-dd-yy'
});


});