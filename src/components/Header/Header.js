import "./Header.scss";
import logo from "../../assets/images/logos/BrainFlix-logo.svg";
import searchIcon from "../../assets/images/icons/search.svg";
import uploadIcon from "../../assets/images/icons/upload.svg";
import userImage from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src={logo} alt="BrainFlix Logo" />
      </div>
      <div className="header__search-user-container">
        <div className="header__search-container">
          <input
            type="text"
            className="header__search-input"
            placeholder="Search"
          />
          <img
            className="header__search-icon"
            src={searchIcon}
            alt="search icon"
          />
        </div>
        <img src={userImage} alt="user icon" className="header__user-img"></img>
      </div>
      <button className="header__upload-btn">
        <img
          className="header__upload-icon"
          src={uploadIcon}
          alt="upload icon"
        />
        <span className="header__button-text">Upload</span>
      </button>
      <img
        src={userImage}
        alt="user icon"
        className="header__user-img--mobile-hidden"
      ></img>
    </header>
  );
}

export default Header;
