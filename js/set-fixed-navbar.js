(function () {

  // setup
  const utils = new window.utils();

  const $navbar = $('.navbar-wrapper');
  const $navbarInner = $navbar.find('.navbar');
  const topGutter =  utils.getCssVal('--topGutter-navbar');
  
  // init
  requestScrollCallback();
  $.request_scroll(requestScrollCallback, window);

  // helpers
  function requestScrollCallback () {
    const atTop = isAtTop();
    $navbarInner.attr('style', setCssPosition(atTop));
    $navbarInner.toggleClass('-atTop', atTop);
  }

  function setCssPosition (atTop) {
    return atTop ? `top:${topGutter};` : '';
  }

  function isAtTop () {
    const scrollOffset = $(window).scrollTop();
    const navbarOffset = $navbar.offset().top;
    return navbarOffset - scrollOffset <= parseInt(topGutter);
  }
})();