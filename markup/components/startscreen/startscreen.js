
$(document).ready(function () {
	svg4everybody();
  $('.start-splin').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    autoplay: true,
    autoplaySpeed: 2000
  });
  /*------------container same height---------------------*/
  Global_main.sameHeight({
    wraper: '.start-splin',
    container: '.slide'
  });

});

$(function() {
  $('.nav__link')
    .on('mouseenter', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('em').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('em').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});




