import "./Header.scss";
import logo from "../../assets/images/logos/BrainFlix-logo.svg";
import searchIcon from "../../assets/images/icons/search.svg";
import uploadIcon from "../../assets/images/icons/upload.svg";
import userImage from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <Link to="/" className="header__logo-container">
        <img className="header__logo" src={logo} alt="BrainFlix Logo" />
      </Link>
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
      <Link to="/upload" className="header__upload-btn">
        <img
          className="header__upload-icon"
          src={uploadIcon}
          alt="upload icon"
        />
        <span className="header__button-text">Upload</span>
      </Link>
      <img
        src={userImage}
        alt="user icon"
        className="header__user-img--mobile-hidden"
      ></img>
    </nav>
  );
}

export default Header;
