import { useState } from "react";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./VideoUpload.scss";
import publishIcon from "../../assets/images/icons/publish.svg";
import { useNavigate } from "react-router-dom";

export default function VideoUpload() {
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    setTitle("");
    setDescription("");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <main className="video-upload">
      <section className="video-upload__wrapper">
        <h1 className="title">Upload Video</h1>
        {isFormSubmitted && (
          <div className="upload-notification">
            <h3>Your video has been uploaded successfully! Redirecting...</h3>
          </div>
        )}
        <section className="upload-form__desktop">
          <div className="thumbnail__container">
            <p className="thumbnail__label">Video Thumbnail</p>
            <img
              className="thumbnail__img"
              src={videoThumbnail}
              alt="video thumbnail"
            />
          </div>
          <form className="upload-form">
            <label className="upload-form__input-label" htmlFor="title">
              Title Your Video
            </label>
            <input
              className="upload-form__input"
              type="text"
              id="title"
              value={title}
              placeholder="Add a title to your video"
              onChange={handleTitleChange}
            />
            <label className="upload-form__input-label" htmlFor="description">
              Add A Video Description
            </label>
            <textarea
              className="upload-form__input"
              id="description"
              value={description}
              placeholder="Add a description to your video"
              rows={4}
              onChange={handleDescriptionChange}
            ></textarea>
          </form>
        </section>

        <div className="upload-form__btn-container">
          <button
            className="upload-form__publish-btn"
            type="submit"
            onClick={handleFormSubmit}
          >
            <img
              className="upload-form__publish-icon"
              src={publishIcon}
              alt="add icon"
            />
            <span className="upload-form__btn-text">Publish</span>
          </button>
          <button className="upload-form__cancel-btn">Cancel</button>
        </div>
      </section>
    </main>
  );
}
