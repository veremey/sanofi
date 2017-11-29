$(document).ready(function () {
  // for current elipsis render
  if (typeof window.document.createElement('div').style.webkitLineClamp !== 'undefined') {
    document.querySelector('html').classList.add('webkit-line-clamp');
  }
});

var Global_main = new Global();

function Global() {
  var globalScope = this;

  /* -------------- same height ----------------
  /*-------------------------------------*/

  this.sameHeight = function(opt) {
    var wraper = $(opt.wraper);
    var container = $(opt.container);

    wraper.each(function () {
      var $highter = 0;
      var $itm = $(this).find(opt.container);

      for (var i = $itm.length - 1; i >= 0; i--) {
        var $small = $itm.eq(i).height();
        if ($small > $highter) {
          $highter = $small;
        }
      }
      $itm.css({'height' : $highter });
    });
  };
};