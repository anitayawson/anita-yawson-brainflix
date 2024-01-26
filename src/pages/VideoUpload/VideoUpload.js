import React from "react";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./VideoUpload.scss";
import publishIcon from "../../assets/images/icons/publish.svg";

export default function VideoUpload() {
  return (
    <main>
      <h1 className="title">Upload Video</h1>
      <div className="thumbnail__container">
        <p className="thumbnail__label">Video Thumbnail</p>
        <img
          className="thumbnail__img"
          src={videoThumbnail}
          alt="video thumbnail"
        />
      </div>
      <form className="form">
        <label className="form__input-label" htmlFor="title">
          Title Your Video
        </label>
        <input
          className="form__input"
          type="text"
          id="title"
          placeholder="Add a title to your video"
        />
        <label className="form__input-label" htmlFor="description">
          Add A Video Description
        </label>
        <textarea
          className="form__input"
          id="description"
          placeholder="Add a video description"
          rows={4}
        ></textarea>
        <button className="form__publish-btn">
          <img
            className="form__publish-icon"
            src={publishIcon}
            alt="add icon"
          />
          <span className="form__button-text">Publish</span>
        </button>
        <button className="form__cancel-btn">Cancel</button>
      </form>
    </main>
  );
}
