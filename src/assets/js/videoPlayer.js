import getBlobDuration from "get-blob-duration";

const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");
const volumeContainer = document.getElementById("jsVolumeContainer");
const fullScrnBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("jsCurrentTime");
const totalTime = document.getElementById("jsTotalTime");
const volumeRange = document.getElementById("jsVolume");
const progressBar = document.getElementById("js-progressBar");

const registerView = () => {
  const videoId = window.location.href.split("/videos/")[1];

  fetch(`/api/${videoId}/view`, { method: "POST" });
};

// console.log(videoPlayer);
function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    // 플레이를 한 후 버튼은 정지 버튼으로 바꾼다.
    playBtn.innerHTML = "<i class='fas fa-pause'></i>";
  } else {
    videoPlayer.pause();
    // 정지를 한 후 버튼은 플레이 버튼으로 바꾼다.
    playBtn.innerHTML = "<i class='fas fa-play'></i>";
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;

    if (videoPlayer.volume === 0) {
      volumeBtn.innerHTML = "<i class='fas fa-volume-mute'></i>";
    } else if (videoPlayer.volume < 0.4) {
      volumeBtn.innerHTML = "<i class='fas fa-volume-down'></i>";
    } else {
      videoPlayer.muted = false;
      volumeBtn.innerHTML = "<i class='fas fa-volume-up'></i>";
    }
    volumeRange.value = videoPlayer.volume;
  } else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = "<i class='fas fa-volume-mute'></i>";
    volumeRange.value = 0;
  }
}

function exitFullscreen() {
  fullScrnBtn.innerHTML = "<i class='fas fa-expand'></i>";
  fullScrnBtn.addEventListener("click", goFullScreen);
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullScreen) {
    document.webkitExitFullScreen();
  } else if (document.msExitFullScreen) {
    document.msExitFullScreen();
  }
}

function goFullScreen() {
  // 브라우저 호환성을 위해 아래와 같이 Prefix를 지정해준다.
  if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen();
  } else if (videoContainer.mozrequestFullscreen) {
    videoContainer.mozrequestFullscreen();
  } else if (videoContainer.webkitrequestFullscreen) {
    videoContainer.webkitrequestFullscreen();
  } else if (videoContainer.msrequestFullscreen) {
    videoContainer.msrequestFullscreen();
  }
  fullScrnBtn.innerHTML = "<i class='fas fa-compress'></i>";
  fullScrnBtn.removeEventListener("click", goFullScreen);
  fullScrnBtn.addEventListener("click", exitFullscreen);
}

// 초를 시간, 분, 초로 변환해주는 함수이다.
function secondsToHms(d) {
  // let h = Math.floor(d / 3600);
  // let m = Math.floor((d % 3600) / 60);
  let m = Math.floor(d / 60);
  let s = Math.floor((d % 60) % 60);

  // if (h < 10) {
  //   h = `0${h}`;
  // }
  if (m < 10) {
    m = `0${m}`;
  }
  if (s < 10) {
    s = `0${s}`;
  }

  return `${m}:${s} `;
}

function setCurrentTime() {
  currentTime.innerHTML = secondsToHms(Math.floor(videoPlayer.currentTime));
  progressBar.value = videoPlayer.currentTime;
}

async function setTotalTime() {
  const blob = await fetch(videoPlayer.src).then((response) => response.blob());
  const duration = await getBlobDuration(blob);
  // totalTime.innerHTML = secondsToHms(videoPlayer.duration);
  totalTime.innerHTML = secondsToHms(duration);
  // setInterval(getCurrentTime, 1000);
}

function handleEnded() {
  // 비디오가 끝나면 view를 하나 증가시킨다.
  registerView();
  videoPlayer.currentTime = 0;
  playBtn.innerHTML = "<i class='fas fa-play'></i>";
}

function handleDrag(event) {
  const {
    target: { value },
  } = event;
  videoPlayer.volume = value;
  if (videoPlayer.volume === 0) {
    volumeBtn.innerHTML = "<i class='fas fa-volume-mute'></i>";
  } else if (videoPlayer.volume < 0.4) {
    volumeBtn.innerHTML = "<i class='fas fa-volume-down'></i>";
  } else {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = "<i class='fas fa-volume-up'></i>";
  }
}

const handleLoadedData = () => {
  progressBar.setAttribute("max", videoPlayer.duration);
};

const handleClickProgress = (e) => {
  // prettier-ignore
  const clickedTime = (e.offsetX / progressBar.offsetWidth) * videoPlayer.duration;
  videoPlayer.currentTime = clickedTime;
};

const handleVolumeMouseOver = () => {
  volumeRange.style.opacity = "1";
};

const handleVolumeMouseLeave = () => {
  volumeRange.style.opacity = "0";
};

function init() {
  videoPlayer.volume = 0.5;
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  volumeContainer.addEventListener("mouseover", handleVolumeMouseOver);
  volumeContainer.addEventListener("mouseleave", handleVolumeMouseLeave);
  fullScrnBtn.addEventListener("click", goFullScreen);
  // duration 즉, totalTime이 변경되면 setTotalTime 함수를 호출한다.
  videoPlayer.addEventListener("durationchange", setTotalTime);
  // currentTime 속성이 변경되면 setCurrentTime 함수를 호출한다.
  videoPlayer.addEventListener("timeupdate", setCurrentTime);
  videoPlayer.addEventListener("ended", handleEnded);
  videoPlayer.addEventListener("loadeddata", handleLoadedData);
  volumeRange.addEventListener("input", handleDrag);
  progressBar.addEventListener("click", handleClickProgress);
}

// videoContainer가 존재할 때만 init()을 실행하도록 한다.
// videoContainer가 없다면 에러가 날 수 있기 때문이다.
if (videoContainer) {
  init();
}
