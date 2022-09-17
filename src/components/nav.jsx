import Logo from "../images/logo.png";
import UserSvg from "../images/symbol-defs.svg";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
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
              <Link to="#" className="nav-link">
                Courses
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="/events" className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="#" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="#" className="nav-link">
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
          <button type="button" className="header-button__auth">
            Log in
          </button>
          <span className="header-span">/</span>
          <button type="button" className="header-button__auth">
            Register
          </button>
        </div>
      </div>
    </>
  );
};
