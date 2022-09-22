import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import pathToSvg from "../../../images/symbol-defs.svg";
import Logo3 from "../../../images/logo2-min.png";
import Logo4 from "../../../images/logo3-min.png";
import Logo12 from "../../../images/logo11-min.png";

export const Speaker = ({ events, id }) => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (events) {
      const eventArr = events.filter((item) => item._id === id);
      setEvent(eventArr);
    }
  }, [events, id]);

  return (
    <section className="speaker-section">
      <div className="container">
        <div className="speaker_container">
          <div className="speaker_image-container">
            {event &&
              event.map(({ profilePicture }) => {
                return (
                  <img
                    key={uuid()}
                    src={profilePicture}
                    alt="poster speaker"
                    width="458"
                  />
                );
              })}
          </div>
          <div className="speaker_info-container">
            <p className="speaker_title">Speaker</p>
            {event &&
              event.map(({ aboutName, aboutJobTitle, link }) => {
                return (
                  <div key={uuid()}>
                    <p className="speaker_name">{aboutName}</p>
                    <p className="speaker_job">{aboutJobTitle}</p>
                    <p className="speaker_info">{link}</p>
                  </div>
                );
              })}
            <ul className="speaker_companies-list">
              <li>
                <img src={Logo4} alt="companies logo" />
              </li>
              <li>
                <img src={Logo12} alt="companies logo" />
              </li>
              <li>
                <img src={Logo3} alt="companies logo" />
              </li>
            </ul>
            <ul className="speaker_link-list">
              <li>
                <button className="speaker_link-button">
                  <svg width="24" height="21">
                    <use href={`${pathToSvg}#icon-facebook`} />
                  </svg>
                </button>
              </li>
              <li>
                <button className="speaker_link-button">
                  <svg width="24" height="24">
                    <use href={`${pathToSvg}#icon-instagram`} />
                  </svg>
                </button>
              </li>
              <li>
                <button className="speaker_link-button">
                  <svg width="24" height="24">
                    <use href={`${pathToSvg}#icon-Twitter`} />
                  </svg>
                </button>
              </li>
              <li>
                <button className="speaker_link-button">
                  <svg width="22" height="22">
                    <use href={`${pathToSvg}#icon-linked-in`} />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
