window.addEventListener('DOMContentLoaded', () => {
  const  slides = [{title: 'Determine Value', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text", img: './assets/images/img.png'}, {title: 'Build Value', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text", img: './assets/images/img.png'}, {title: 'Realize Value', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text", img: './assets/images/img.png'}, {title: 'Test Value', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text", img: './assets/images/img.png'}];
  var splide = new Splide( '.splide', {
    direction: 'ttb',
    height: '620px',
    arrows: false,
    wheel: true,
    releaseWheel: true,
  });
  
  const bar = splide.root.querySelector( '.my-slider-progress-bar' );
  
  splide.on( 'mounted move', function () {
    const end  = splide.Components.Controller.getEnd();
    const current = splide.Components.Controller.getIndex();
    let rate;
    if (!current) {
      rate = 0;
    } else {
      rate = Math.min( ( splide.index) / end, 1 );
    }
    bar.style.height = String( 100 * rate ) + '%';
  } );

  splide.on( 'pagination:updated', function ( data ) {
    const current = splide.Components.Controller.getIndex();
    data.items.forEach( function ( item ) {
      if(item.page > current) {
        item.button.style.backgroundColor = '#ffff';
        item.button.style.borderColor = '#D0CFD4';
      } else {
        item.button.style.backgroundColor = '#111111';
        item.button.style.borderColor = '#ffff';
      }
    } );
  } );

  splide.on( 'pagination:mounted', function ( data ) {
    data.items.forEach( function ( item, index ) {
      let title = document.createElement('div');
      title.className = "splide__pagination__title";
      title.innerHTML = slides[index].title;
      item.button.append(title);
    } );
  } );
  
  
  splide.mount();
})