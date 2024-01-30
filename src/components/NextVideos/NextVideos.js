import "./NextVideos.scss";
import { useNavigate } from "react-router-dom";

function NextVideos({ videos }) {
  const navigate = useNavigate();

  const handleSelectVideo = (clickedId) => {
    navigate(`/videos/${clickedId}`);
  };

  return (
    <section className="next-videos">
      <p className="next-videos__title">Next Videos</p>
      <div className="video-list">
        {videos.map((video) => (
          <article
            key={video.id}
            className="video"
            onClick={() => handleSelectVideo(video.id)}
          >
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
          </article>
        ))}
      </div>
    </section>
  );
}

export default NextVideos;
