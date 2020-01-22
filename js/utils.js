window.utils = function () {
  this.getCssVal = function (cssCustomProp) {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(cssCustomProp);
  };

  this.getCssDelay = function (cssDelayProp) {
    const cssDelay = this.getCssVal(cssDelayProp);
    return parseFloat(cssDelay) * 1000;
  }

  const html = document.querySelector(`html`);
  this.setCssProp = function (name, value) {
    html.style.setProperty(name, value);
  };
};
