import Backdrop from "../../Backdrop";
import Video from "../../Video";
import pathToSvg from "../../../images/symbol-defs.svg";
import StatisticsImg from "../../../images/image.jpg";
import { useState } from "react";

export const Statistics = () => {
  const [frame, setFrame] = useState(false);
  const videoPlay = () => {
    setFrame(!frame);
  };

  return (
    <section>
      <div className="container">
        <div onClick={videoPlay} className="statistics-player_container">
          <div className="statistics-circle_play">
            <svg width="16" height="16">
              <use href={`${pathToSvg}#icon-arrow-play`} />
            </svg>
          </div>
          <p className="statistics-text">Watch Video</p>
        </div>
        {frame && (
          <Backdrop onClick={videoPlay}>
            <Video />
          </Backdrop>
        )}
        <div className="statistics-container">
          <div className="statistics-container_left">
            <div>
              <img src={StatisticsImg} alt="Girl with Mackbook" />
            </div>
          </div>
          <div className="statistics-container_right">
            <p>
              <span>1200</span>
              students graduated
            </p>
            <p>
              <span>84</span>
              completed courses
            </p>
            <p>
              <span>16</span>
              qualified tutors
            </p>
            <p>
              <span>5</span>
              years of experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
