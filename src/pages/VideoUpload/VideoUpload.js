import React from "react";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./VideoUpload.scss";
import publishIcon from "../../assets/images/icons/publish.svg";

export default function VideoUpload() {
  return (
    <main className="video-upload">
      <div className="video-upload__wrapper">
        <h1 className="title">Upload Video</h1>
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
            placeholder="Add a title to your video"
          />
          <label className="upload-form__input-label" htmlFor="description">
            Add A Video Description
          </label>
          <textarea
            className="upload-form__input"
            id="description"
            placeholder="Add a video description"
            rows={4}
          ></textarea>
          <button className="upload-form__publish-btn">
            <img
              className="upload-form__publish-icon"
              src={publishIcon}
              alt="add icon"
            />
            <span className="upload-form__btn-text">Publish</span>
          </button>
          <button className="upload-form__cancel-btn">Cancel</button>
        </form>
      </div>
    </main>
  );
}
