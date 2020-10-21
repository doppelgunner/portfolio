module.exports = {
  elementInViewport,
};

function elementInViewport(el, viewEl) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  if (viewEl) {
    return (
      top >= viewEl.scrollTop &&
      left >= viewEl.scrollLeft &&
      top + height <= viewEl.scrollTop + window.innerHeight &&
      left + width <= viewEl.scrollLeft + window.innerWidth
    );
  } else {
    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      top + height <= window.pageYOffset + window.innerHeight &&
      left + width <= window.pageXOffset + window.innerWidth
    );
  }
}
