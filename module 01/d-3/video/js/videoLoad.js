const desktopVideo = document.querySelector(".promo__bg-video");
const mobileVideo = document.querySelector(".promo__bg-video_mobile");

if (window.innerWidth >= 768) {
  desktopVideo.play();
} else {
  mobileVideo.play();
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    desktopVideo.play();
  } else {
    mobileVideo.play();
  }
});
