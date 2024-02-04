import { useState } from "react";
import axios from "axios";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./VideoUpload.scss";
import publishIcon from "../../assets/images/icons/publish.svg";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export default function VideoUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [inputError, setInputError] = useState({
    title: false,
    description: false,
  });
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    const inputValue = event.target.value;
    setTitle(inputValue);
    setInputError((prev) => ({ ...prev, title: inputValue === "" }));
  };

  const handleDescriptionChange = (event) => {
    const inputValue = event.target.value;
    setDescription(inputValue);
    setInputError((prev) => ({ ...prev, description: inputValue === "" }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (title === "" || description === "") {
      setInputError({ title: title === "", description: description === "" });
      return;
    }

    const newVideo = {
      image: "/images/Upload-video-preview.jpg",
      title: title,
      description: description,
    };

    try {
      await axios.post(`${BASE_URL}/videos`, newVideo);
      setIsFormSubmitted(true);
      navigate("/");
    } catch (err) {
      console.error("Error uploading video:", err);
    }
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
              className={`upload-form__input ${
                inputError.title ? "error" : ""
              }`}
              // className="upload-form__input"
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
              className={`upload-form__input ${
                inputError.description ? "error" : ""
              }`}
              // className="upload-form__input"
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
          <button
            className="upload-form__cancel-btn"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </section>
    </main>
  );
}
