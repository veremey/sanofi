
$(document).ready(function () {
	svg4everybody();
  $('.start-splin').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
  /*------------container same height---------------------*/
  Global_main.sameHeight({
    wraper: '.start-splin',
    container: '.slide'
  });

});




