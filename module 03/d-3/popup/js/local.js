window.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.querySelector('.popup-local__play');
  const video = document.getElementById('local-video');

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
})