import { useState } from "react";
import Svg from "../../images/symbol-defs.svg";
import Video from "../Video";
import Backdrop from "../Backdrop";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [frame, setFrame] = useState(false);
  const videoPlay = () => {
    setFrame(!frame);
  };
  return (
      <div className="container container-header">
        <div className="hero-content">
          <button onClick={videoPlay} type="button" className="button-play">
            <div className="btn-play__wrap">
              <svg width="20" height="20" className="auth__google-svg">
                <use href={`${Svg}#icon-arrow-play `} />
              </svg>
            </div>
            Play showreel
          </button>
          {frame && (
            <Backdrop onClick={videoPlay}>
              <Video />
            </Backdrop>
          )}
          <h1 className="hero-title">
            Enjoy studying with Createx Online Courses
          </h1>

          <ul className="hero-button__list">
            <li className="hero-button__list-item">
                <Link to="/about" className="link-orange button-outlined btn-hover">
                  About us
                </Link>
            </li>
            <li>
                <Link  className="link header-button gradient btn-hover" to="/courses">Explore courses</Link>
            </li>
          </ul>
        </div>

        <div className="hero-benefit">
          <ul className="hero-benefit-list">
            <li className="hero-benefit-list__item">
              <span className="hero-benefit__span">1200</span>
              <p className="hero-benefit__text">Students graduated</p>
            </li>
            <li className="hero-benefit-list__item">
              <span className="hero-benefit__span">84</span>
              <p className="hero-benefit__text">Completed courses</p>
            </li>

            <li className="hero-benefit-list__item">
              <span className="hero-benefit__span">16</span>
              <p className="hero-benefit__text">Qualified tutors</p>
            </li>
            <li className="hero-benefit-list__item">
              <span className="hero-benefit__span">5</span>
              <p className="hero-benefit__text">Years of experience</p>
            </li>
          </ul>
        </div>
      </div>
  );
};
