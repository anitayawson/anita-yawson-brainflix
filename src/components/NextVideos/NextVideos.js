import "./NextVideos.scss";
import { Link } from "react-router-dom";

function NextVideos({ videos }) {
  return (
    <section className="next-videos">
      <p className="next-videos__title">Next Videos</p>
      <div className="video-list">
        {videos.map((video) => (
          <Link key={video.id} to={`/videos/${video.id}`} className="video">
            <div className="video__thumbnail-container">
              <img
                className="video__thumbnail"
                src={video.image}
                alt={video.title}
              />
            </div>
            <div className="video__details">
              <p className="video__title">{video.title}</p>
              <p className="video__creator">{video.channel}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default NextVideos;
