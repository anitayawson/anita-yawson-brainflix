import "./NextVideos.scss";

function NextVideos({ videos, selectVideo }) {
  return (
    <section className="next-videos">
      <p className="next-videos__title">Next Videos</p>
      <div className="video-list">
        {videos.map((video) => (
          <article
            key={video.id}
            className="video"
            onClick={() => selectVideo(video.id)}
          >
            <div className="video__thumbnail-container">
              <img
                className="video__thumbnail"
                src={video.image}
                alt="thumbnail"
              />
            </div>
            <div className="video__details">
              <p className="video__title">{video.title}</p>
              <p className="video__creator">{video.channel}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NextVideos;
