window.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__nav');
  const close = document.querySelector('.header__close');
  const header = document.querySelector('.header');

  burger && burger.addEventListener('click', () => {
    menu?.classList.add('open');
    setTimeout(() => {
      header?.classList.add('blur');
    }, 300);
  })

  close && close.addEventListener('click', () => {
    menu?.classList.remove('open');
    setTimeout(() => {
      header?.classList.remove('blur');
    }, 300);
  })
})