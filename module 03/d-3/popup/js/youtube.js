var tag = document.createElement("script");
const youtubeButton = document.querySelector(".button__youtube");
const popupClose = document.querySelector(".popup-youtube__close");

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
}
