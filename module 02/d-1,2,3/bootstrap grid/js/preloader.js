window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const preloader = document.querySelector('.preloader');
    if (preloader && !preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000);
})