(function () {
  // data
  const marqueeThemes = [
    { bgcolor: '#2E5868', image: 'url(../images/IMG_0774.jpg)' },
    { bgcolor: '#3F75BB', image: 'url(../images/IMG_0791.jpg)' },
    { bgcolor: '#1F744B', image: 'url(../images/IMG_0795.jpg)' },
    { bgcolor: '#0FD8CE', image: 'url(../images/IMG_0781.jpg)' },
    { bgcolor: '#A8C38E', image: 'url(../images/IMG_0792.jpg)' },
    { bgcolor: '#FDF1C7', image: 'url(../images/39DC82C1-8F7B-4832-BFE5-93AB91C4DD1E.jpg)' }    
  ]; 

  // setup
  const utils = new window.utils();
  const fadeDelay = utils.getCssDelay('--fadeDelay-marquee');
  const $marquee = $('.marquee');

  let activeThemeIndex = 0;
        
  // init
  setInterval(triggerNextTheme, 6000);

  // helpers
  function triggerNextTheme () {
    activeThemeIndex = getNewThemeIndex();
    $marquee.addClass('-transitioning');
    setTimeout(updateTheme, fadeDelay);
  }

  function updateTheme () {
    const activeTheme = marqueeThemes[activeThemeIndex];
    utils.setCssProp('--bgcolor-marquee', activeTheme.bgcolor);
    utils.setCssProp('--image-marquee', activeTheme.image);
    $marquee.removeClass('-transitioning');
  }

  function getNewThemeIndex () {
    const isAtLastTheme = activeThemeIndex+1 === marqueeThemes.length;
    return isAtLastTheme ? 0 : activeThemeIndex + 1;
  }
})();