import "./VideoPlayer.scss";

function VideoPlayer({ selectedVideo }) {
  return (
    <main>
      <video
        className="current-video__thumbnail"
        width="100%"
        controls
        poster={selectedVideo.image}
      ></video>
    </main>
  );
}

export default VideoPlayer;
