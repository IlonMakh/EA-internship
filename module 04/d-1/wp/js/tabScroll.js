window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.getElementById("proceduresNav");
  const isHorizontalScroll= tabs.scrollWidth > tabs.clientWidth;
  isHorizontalScroll && tabs
  .addEventListener('wheel', function(event) {
    let scrollStep;
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {
      scrollStep = 1;
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
      scrollStep = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
      scrollStep = this.clientHeight;
    }
    if (event.deltaY != 0) {
      this.scrollLeft += scrollStep * event.deltaY;
      event.preventDefault();
    }
  });
})