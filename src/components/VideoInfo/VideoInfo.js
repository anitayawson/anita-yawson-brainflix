import "./VideoInfo.scss";
import ViewIcon from "../../assets/images/icons/views.svg";
import LikeIcon from "../../assets/images/icons/likes.svg";

function VideoInfo({ selectedVideo }) {
  return (
    <section className="video-info">
      <h1 className="video-info__title">{selectedVideo.title}</h1>
      <article className="video-info__content-wrapper">
        <div className="video-info__name-and-date">
          <p className="video-info__subheader">By {selectedVideo.channel}</p>
          <p className="video-info__detail">{selectedVideo.timestamp}</p>
        </div>
        <div className="video-info__views-and-likes">
          <div className="video-info__views-wrapper">
            <img src={ViewIcon} alt="view icon" />
            <p className="video-info__detail">{selectedVideo.views}</p>
          </div>
          <div className="video-info__likes-wrapper">
            <img src={LikeIcon} alt="like icon" />
            <p className="video-info__detail">{selectedVideo.likes}</p>
          </div>
        </div>
      </article>
      <p className="video-info__description">{selectedVideo.description}</p>
    </section>
  );
}

export default VideoInfo;
