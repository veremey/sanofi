$(function () {
  // same height
  /*---------------------------------------*/
  Global_main.sameHeight({
    wraper: '.materials',
    container: '.material__text'
  });
  /*---------------------------------------*/
  Global_main.sameHeight({
    wraper: '.materials',
    container: '.material__title'
  });
  /*---------------------------------------*/

});

$(document).ready(function () {

  $('.events_four').each(function () {
    $(this).slick({
      infinite: false,
      variableWidth: false,
      slidesToShow: 4,
    });
  });

  $('.events_three').each(function () {
    $(this).slick({
      infinite: false,
      variableWidth: false,
      slidesToShow: 3,
    });
  });

  Global_main.sameHeight({
    wraper: '.events',
    container: '.title__events'
  });

});