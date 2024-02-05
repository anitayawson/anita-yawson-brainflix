import "./NextVideos.scss";
import { Link } from "react-router-dom";

function NextVideos({ videos }) {
  return (
    <aside className="next-videos">
      <p className="next-videos__title">Next Videos</p>
      <div className="video-list">
        {videos.map((video) => (
          <Link to={`/videos/${video.id}`} key={video.id} className="video">
            <div className="video__thumbnail-container">
              <img
                className="video__thumbnail"
                src={`http://localhost:8080${video.image}`}
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
    </aside>
  );
}

export default NextVideos;
