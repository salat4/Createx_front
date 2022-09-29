import { v4 as uuid } from "uuid";
import pathToSvg from "../../../images/symbol-defs.svg";
import Logo3 from "../../../images/logo2-min.png";
import Logo4 from "../../../images/logo3-min.png";
import Logo12 from "../../../images/logo11-min.png";
import { useEffect } from "react";
import { useState } from "react";

export const Speaker = ({ state }) => {
  const [benefits, setBenefits] = useState(null);
  useEffect(() => {
    const arr = [];
    [state.i].map(({ list }) => {
      for (let text of list) {
        arr.push(text);
      }
      return list;
    });
    setBenefits(arr);
  }, [state]);

  return (
    <section className="speaker-section">
      <div className="container">
        <div className="speaker_container">
          <div className="speaker_image-container">
            {state &&
              [state.i].map(({ profilePicture }) => {
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
            {state &&
              [state.i].map(({ aboutName, aboutJobTitle, link }) => {
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
        <div className="speaker_benefit-container">
          <div className="speaker_benefit_title-container">
            <p>For whom?</p>
            <p>Who will benefit from the event:</p>
          </div>
          <div className="speaker_benefit_list-container">
            <ul>
              {benefits &&
                benefits.map((text) => {
                  return (
                    <li key={uuid()} className="speaker_benefit_item">
                      <div>
                        <svg width="19" height="16">
                          <use href={`${pathToSvg}#icon-checked`} />
                        </svg>
                      </div>
                      {text}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
