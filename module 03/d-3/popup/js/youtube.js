var tag = document.createElement("script");
const youtubeButton = document.querySelector(".button__youtube");
const popupClose = document.querySelector(".popup-youtube__close");
const plus10 = document.querySelector(".yt__plus10");
const plus20 = document.querySelector(".yt__plus20");
const minus10 = document.querySelector(".yt__minus10");
const minus20 = document.querySelector(".yt__minus20");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: "BfgHIftIG6w",
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  youtubeButton?.addEventListener("click", () => {
    event.target.playVideo();
  });
  popupClose?.addEventListener("click", () => {
    event.target.stopVideo();
  });

  plus10?.addEventListener('click', () => rewind('plus', 10));
  plus20?.addEventListener('click', () => rewind('plus', 20));
  minus10?.addEventListener('click', () => rewind('minus', 10));
  minus20?.addEventListener('click', () => rewind('minus', 20));

}

function rewind (operator, value) {
  const currentTime = player.getCurrentTime();
  const duration = player.getDuration();
  const diff = duration - currentTime; 
  if (operator === 'minus' && currentTime > 10 && value === 10) {
    player.seekTo(currentTime - 10, true);
    player.playVideo();
  }
  if (operator === 'minus' && currentTime > 20 && value === 20) {
    player.seekTo(currentTime - 20, true);
    player.playVideo();
  }
  if (operator === 'plus' && diff > 10 && value === 10) {
    player.seekTo(currentTime + 10, true);
    player.playVideo();
  }
  if (operator === 'plus' && diff > 20 && value === 20) {
    player.seekTo(currentTime + 20, true);
    player.playVideo();
  }
}
