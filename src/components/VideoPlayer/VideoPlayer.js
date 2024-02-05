import "./VideoPlayer.scss";

function VideoPlayer({ selectedVideo }) {
  return (
    <video
      className="current-video__thumbnail"
      width="100%"
      controls
      poster={`http://localhost:8080${selectedVideo.image}`}
    ></video>
  );
}

export default VideoPlayer;
