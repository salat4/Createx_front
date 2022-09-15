import Svg from "../../images/symbol-defs.svg";
import AboutImg from "../../images/image2.jpg";

export const Team = () => {
  return (
    <div className="team-section">
      <div className=" container team-container">
        <h2 className="text team-title">
          Best tutors are all here <br />
          <span className="title">Meet our team</span>
        </h2>

        <div className="slider-btn__wrap">
          <button className="slider-btn">
            <svg width="20" height="20" className="slider-btn__svg">
              <use href={`${Svg}#icon-prev-btn`} />
            </svg>
          </button>
          <button className="slider-btn">
            <svg width="20" height="20" className="slider-btn__svg">
              <use href={`${Svg}#icon-Right`} />
            </svg>
          </button>
        </div>

        <ul className="team-list">
          <li className="team-list__item">
            <div className="team-img__container">
              <img
                src={AboutImg}
                alt=""
                width="285"
                height="340"
                className="team-photo"
              />
            </div>
            <ul className="team-social__list">
              <li className="team-social-svg">
                <svg className="social-svg" width="20" height="20">
                  <use href={`${Svg}#icon-facebook`} />
                </svg>
              </li>
              <li className="team-social-svg">
                <svg className="social-svg" width="20" height="20">
                  <use href={`${Svg}#icon-instagram`} />
                </svg>
              </li>
              <li className="team-social-svg">
                <svg className="social-svg" width="20" height="20">
                  <use href={`${Svg}#icon-linked-in`} />
                </svg>
              </li>
            </ul>
            <p className="team-name">Dianne Russell</p>
            <p className="team-position">Founder and CEO</p>
          </li>

          <li className="team-list__item">
            <div className="team-img__container">
              <img
                src={AboutImg}
                alt=""
                width="285"
                height="340"
                className="team-photo"
              />
            </div>
            <ul className="team-social__list">
              <li className="team-social-svg">
                <svg className="social-svg" width="20" height="20">
                  <use href={`${Svg}#icon-facebook`} />
                </svg>
              </li>
              <li className="team-social-svg">
                <svg className="social-svg" width="20" height="20">
                  <use href={`${Svg}#icon-instagram`} />
                </svg>
              </li>
              <li className="team-social-svg">
                <svg className="social-svg" width="20" height="20">
                  <use href={`${Svg}#icon-linked-in`} />
                </svg>
              </li>
            </ul>
            <p className="team-name">Dianne Russell</p>
            <p className="team-position">Founder and CEO</p>
          </li>

          <li className="team-list__item">
            <div className="team-img__container">
              <img
                src={AboutImg}
                alt=""
                width="285"
                height="340"
                className="team-photo"
              />
            </div>
            <ul className="team-social__list">
              <li className="team-social-svg">
                <svg className="social-svg" width="20" height="20">
                  <use href={`${Svg}#icon-facebook`} />
                </svg>
              </li>
              <li className="team-social-svg">
                <svg className="social-svg" width="20" height="20">
                  <use href={`${Svg}#icon-instagram`} />
                </svg>
              </li>
              <li className="team-social-svg">
                <svg className="social-svg" width="20" height="20">
                  <use href={`${Svg}#icon-linked-in`} />
                </svg>
              </li>
            </ul>
            <p className="team-name">Dianne Russell</p>
            <p className="team-position">Founder and CEO</p>
          </li>

          <li className="team-list__item">
            <div className="team-img__container">
              <img
                src={AboutImg}
                alt=""
                width="285"
                height="340"
                className="team-photo"
              />
            </div>
            <ul className="team-social__list">
              <li className="team-social-svg">
                <svg className="social-svg" width="20" height="20">
                  <use href={`${Svg}#icon-facebook`} />
                </svg>
              </li>
              <li className="team-social-svg">
                <svg className="social-svg" width="20" height="20">
                  <use href={`${Svg}#icon-instagram`} />
                </svg>
              </li>
              <li className="team-social-svg">
                <svg className="social-svg" width="20" height="20">
                  <use href={`${Svg}#icon-linked-in`} />
                </svg>
              </li>
            </ul>
            <p className="team-name">Dianne Russell</p>
            <p className="team-position">Founder and CEO</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
