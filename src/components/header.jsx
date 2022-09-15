import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import UserSvg from "../images/symbol-defs.svg";
import { ShowLoginModal } from "./Home/showLoginModal";
import { ShowRegModal } from "./Home/showRegistrationModal";

export const Header = () => {
  return (
    <>
      <div className="header-section">
        <div className="container">
          <div className="nav-container">
            <nav className="navigation">
              <img
                src={Logo}
                width="130"
                height="22"
                alt="logo"
                className="header-logo"
              />
              <ul className="nav-list">
                <li className="nav-list__item">
                  <Link to="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-list__item">
                  <Link to="/courses" className="nav-link">
                    Courses
                  </Link>
                </li>
                <li className="nav-list__item">
                  <Link to="/events" className="nav-link">
                    Events
                  </Link>
                </li>
                <li className="nav-list__item">
                  <Link to="/blog" className="nav-link">
                    Blog
                  </Link>
                </li>
                <li className="nav-list__item">
                  <Link to="/contacts" className="nav-link">
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="btn-menu">
              <button type="button" className="header-button gradient">
                Get consultation
              </button>
              <svg width="20" height="20">
                <use href={`${UserSvg}#icon-profile`} />
              </svg>
              <ShowLoginModal />
              <span className="header-span">/</span>
              <ShowRegModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
