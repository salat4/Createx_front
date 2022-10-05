import { Link } from "react-router-dom";
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
                  <Link to="/about" className="nav-link hover">
                    About Us
                  </Link>
                </li>
                <li className="nav-list__item">
                  <Link to="/courses" className="nav-link hover">
                    Courses
                  </Link>
                </li>
                <li className="nav-list__item">
                  <Link to="/events" className="nav-link hover">
                    Events
                  </Link>
                </li>
                <li className="nav-list__item">
                  <Link to="/blogs" className="nav-link hover">
                    Blog
                  </Link>
                </li>
                <li className="nav-list__item">
                  <Link to="/contacts" className="nav-link hover">
                    Contacts
                  </Link>
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
