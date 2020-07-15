const recordContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;

const handleVideoData = (event) => {
  const { data: videoFile } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  // faking click
  link.click();
};

const stopRecording = () => {
  videoRecorder.stop();
  // video 녹화 시 빨간 점이 안사라진다면 아래의 stream의 각각의 track을 stop해주어야 한다.
  streamObject.getTracks().forEach((track) => track.stop());
  recordBtn.removeEventListener("click", stopRecording);
  recordBtn.addEventListener("click", getVideo);
  recordBtn.innerHTML = "Start recording";
};

const startRecording = () => {
  videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  // dataavailable은 녹화가 다 끝나야 받을 수 있다.
  // 하지만 start(1000)과 같이 time을 주게 되면 1초마다 event를 가져올 수 있다.
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  recordBtn.addEventListener("click", stopRecording);
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 },
    });

    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();
    recordBtn.innerHTML = "Stop recording";
    streamObject = stream;
    startRecording();
  } catch (error) {
    recordBtn.innerHTML = "😞 Can't record";
  } finally {
    recordBtn.removeEventListener("click", getVideo);
  }
};

const init = () => {
  recordBtn.addEventListener("click", getVideo);
};

if (recordContainer) {
  init();
}
