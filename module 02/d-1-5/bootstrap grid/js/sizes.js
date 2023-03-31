const checkSizes = () => {
  let vh = window.innerHeight * 0.01;
  let vw = document.documentElement.clientWidth * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--vw', `${vw}px`);
}

window.addEventListener('load', checkSizes);
window.addEventListener('resize', checkSizes);