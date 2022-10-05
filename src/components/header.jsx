import { NavLink, Link } from "react-router-dom";
import Logo from "../images/logo.png";
import UserSvg from "../images/symbol-defs.svg";
import { ShowLoginModal } from "./Home/showLoginModal";
import { ShowRegModal } from "./Home/showRegistrationModal";
import { ShowConsultationModal } from "./Home/showConsultationModal";
import { useState } from "react";
import { useEffect } from "react";

export const Header = () => {
  const [modalRegistration, setModalRegistration] = useState(false);
  const [user, setUser] = useState()
  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem('user'))
    if(user){
      setUser(user)
    }
  },[])
  const showRegistrationForm = () => {
    setModalRegistration(!modalRegistration);
    setModalLogin(false);
  };

  const [modalLogin, setModalLogin] = useState(false);

  const showLoginForm = () => {
    setModalLogin(!modalLogin);
    setModalRegistration(false);
  };

  const onClick = () => {
    setModalRegistration(false);
    setModalLogin(false);
  };

  return (
    <>
      <div className="header-section">
        <div className="container">
          <div className="nav-container">
            <nav className="navigation">
              <Link className="logo" to="/">
                <img
                  src={Logo}
                  width="130"
                  height="22"
                  alt="logo"
                  className="header-logo"
                />
              </Link>
              <ul className="nav-list">
                <li className="nav-list__item ">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "activeHeader" : "nav-link"
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-list__item">
                  <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                      isActive ? "activeHeader" : "nav-link"
                    }
                  >
                    Courses
                  </NavLink>
                </li>
                <li className="nav-list__item">
                  <NavLink
                    to="/events"
                    className={({ isActive }) =>
                      isActive ? "activeHeader" : "nav-link"
                    }
                  >
                    Events
                  </NavLink>
                </li>
                <li className="nav-list__item">
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive ? "activeHeader" : "nav-link"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-list__item">
                  <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                      isActive ? "activeHeader" : "nav-link"
                    }
                  >
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="btn-menu">
              <ShowConsultationModal onClick={onClick} />
             
             {user ? <div>{user.name}</div> :
             <div>
             <svg width="20" height="20">
               <use href={`${UserSvg}#icon-profile`} />
             </svg>
             <ShowLoginModal
               onClick={onClick}
               modalLogin={modalLogin}
               showLoginForm={showLoginForm}
               showRegistrationForm={showRegistrationForm}
               modalRegistration={modalRegistration}
             />
             <span className="header-span">/</span>
             <ShowRegModal
               onClick={onClick}
               modalLogin={modalLogin}
               showLoginForm={showLoginForm}
               showRegistrationForm={showRegistrationForm}
               modalRegistration={modalRegistration}
             />
             </div>
             }
             
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
