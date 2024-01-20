import "./VideoPlayer.scss";

function VideoPlayer({ selectedVideo }) {
  return (
    <video
      style={{ aspectRatio: "16/9" }}
      className="current-video__thumbnail"
      width="100%"
      controls
      poster={selectedVideo.image}
    ></video>
  );
}

export default VideoPlayer;
