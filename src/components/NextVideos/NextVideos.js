import "./NextVideos.scss";

function NextVideos() {
  return (
    <section className="next-videos">
      <p className="next-videos__title">Next Videos</p>
      <div className="video-list">
        <article className="video">
          <div className="video__thumbnail-container">
            <img
              className="video__thumbnail"
              src="https://project-2-api.herokuapp.com/images/image1.jpg"
              alt="thumbnail"
            />
          </div>
          <div className="video__details">
            <p className="video__title">
              Become A Travel Pro In One Easy Lesson
            </p>
            <p className="video__creator">Todd Welch</p>
          </div>
        </article>
        <article className="video">
          <div className="video__thumbnail-container">
            <img
              className="video__thumbnail"
              src="https://project-2-api.herokuapp.com/images/image2.jpg"
              alt="thumbnail"
            />
          </div>
          <div className="video__details">
            <p className="video__title">
              Become A Travel Pro In One Easy Lesson
            </p>
            <p className="video__creator">Todd Welch</p>
          </div>
        </article>
        <article className="video">
          <div className="video__thumbnail-container">
            <img
              className="video__thumbnail"
              src="https://project-2-api.herokuapp.com/images/image2.jpg"
              alt="thumbnail"
            />
          </div>
          <div className="video__details">
            <p className="video__title">
              Become A Travel Pro In One Easy Lesson
            </p>
            <p className="video__creator">Todd Welch</p>
          </div>
        </article>
        <article className="video">
          <div className="video__thumbnail-container">
            <img
              className="video__thumbnail"
              src="https://project-2-api.herokuapp.com/images/image2.jpg"
              alt="thumbnail"
            />
          </div>
          <div className="video__details">
            <p className="video__title">
              Become A Travel Pro In One Easy Lesson
            </p>
            <p className="video__creator">Todd Welch</p>
          </div>
        </article>
        <article className="video">
          <div className="video__thumbnail-container">
            <img
              className="video__thumbnail"
              src="https://project-2-api.herokuapp.com/images/image2.jpg"
              alt="thumbnail"
            />
          </div>
          <div className="video__details">
            <p className="video__title">
              Become A Travel Pro In One Easy Lesson
            </p>
            <p className="video__creator">Todd Welch</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default NextVideos;
