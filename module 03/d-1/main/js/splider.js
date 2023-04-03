window.addEventListener('DOMContentLoaded', () => {
  const splide = new Splide( '.splide', {
    perPage: 1,
    autoWidth: true,
    focus    : 0,
    omitEnd  : true,
  } );
  
  splide.on( 'move', function () {
    const pages = document.querySelector('.splide__arrows-page');
    if (pages) pages.innerHTML = `${splide.index + 1}/${splide.length}`;
  });
  
  splide.mount();
})