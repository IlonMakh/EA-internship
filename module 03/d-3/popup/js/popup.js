window.addEventListener('DOMContentLoaded', () => {
  const youtubeButton = document.querySelector('.button__youtube');
  const localButton = document.querySelector('.button__local');
  const popupYoutube = document.querySelector('.popup-youtube');
  const popupLocal = document.querySelector('.popup-local');
  const popupCloseYoutube = document.querySelector('.popup-youtube__close');
  const popupCloseLocal = document.querySelector('.popup-local__close');

  youtubeButton?.addEventListener('click', () => {
    popupYoutube?.classList.add('open');
  })

  popupCloseYoutube?.addEventListener('click', () => {
    popupYoutube?.classList.remove('open');
  })

  localButton?.addEventListener('click', () => {
    popupLocal?.classList.add('open');
  })

  popupCloseLocal?.addEventListener('click', () => {
    popupLocal?.classList.remove('open');
  })
})