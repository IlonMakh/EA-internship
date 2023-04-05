window.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.querySelector('.popup-local__play');
  const video = document.getElementById('local-video');
  const plus10 = document.querySelector(".lc__plus10");
  const plus20 = document.querySelector(".lc__plus20");
  const minus10 = document.querySelector(".lc__minus10");
  const minus20 = document.querySelector(".lc__minus20");

  playBtn?.addEventListener('click', () => {
    video?.play();
    playBtn.classList.add('hidden');
  })

  video?.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    playBtn.classList.toggle('hidden');
  })

  plus10?.addEventListener('click', () => rewind('plus', 10));
  plus20?.addEventListener('click', () => rewind('plus', 20));
  minus10?.addEventListener('click', () => rewind('minus', 10));
  minus20?.addEventListener('click', () => rewind('minus', 20));

  function rewind (operator, value) {
    const currentTime = video.currentTime;
    const duration = video.duration;
    const diff = duration - currentTime; 
    if (operator === 'minus' && currentTime > 10 && value === 10) {
      video.currentTime -= 10;
    }
    if (operator === 'minus' && currentTime > 20 && value === 20) {
      video.currentTime -= 20;
    }
    if (operator === 'plus' && diff > 10 && value === 10) {
      video.currentTime += 10;
    }
    if (operator === 'plus' && diff > 20 && value === 20) {
      video.currentTime += 20;
    }
  }
})

