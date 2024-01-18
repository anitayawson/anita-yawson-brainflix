import "./VideoPlayer.scss";

function VideoPlayer() {
  return (
    <video
      className="current-video__thumbnail"
      width="100%"
      controls
      poster="https://project-2-api.herokuapp.com/images/image0.jpg"
    ></video>
  );
}

export default VideoPlayer;
