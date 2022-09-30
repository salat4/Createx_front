import { useLocation } from "react-router-dom";
import Svg from "../../images/symbol-defs.svg";

export const Curator = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="curator-section">
      <div className="container curator-container">
          <img src={state.profilePicture} alt="curator" width="590" />
          <div className="curator-info__wrap">
            <h2 className="about-title">
              Course curator
              <br />
              <span className="about-title__span">Cody Fisher</span>
            </h2>
            <p className="curator-info__title">Senior UX designer in IT Product Company</p>

            <ul className="curator-info__list">
              <li className="curator-info__list__item">
                <svg width="20" height="20">
                  <use href={`${Svg}#icon-Star`} />
                </svg>
                <p>4.9 rate</p>
              </li>
              <li className="curator-info__list__item">
                <svg width="20" height="20">
                  <use href={`${Svg}#icon-play`} />
                </svg>
                <p>4 courses</p>
              </li>
              <li className="curator-info__list__item">
                <svg width="20" height="20">
                  <use href={`${Svg}#icon-profile`} />
                </svg>
                <p>350 students</p>
              </li>
            </ul>
            <p className="curator-info__text">
              Mattis adipiscing aliquam eu proin metus a iaculis faucibus.
              Tempus curabitur venenatis, vulputate venenatis fermentum ante.
              Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus
              sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem
              vulputate molestie laoreet at massa sed pharetra. Ac commodo
              platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam
              vel aliquam tristique sollicitudin interdum quam.{" "}
            </p>

            <ul className="curator-social__list">
              <li className="curator-social__list__item">
                <svg width="24" height="21">
                  <use href={`${Svg}#icon-facebook`} />
                </svg>
              </li>
              <li className="curator-social__list__item">
                <svg width="24" height="24">
                  <use href={`${Svg}#icon-behance`} />
                </svg>
              </li>
              <li className="curator-social__list__item">
                <svg width="24" height="24">
                  <use href={`${Svg}#icon-Twitter`} />
                </svg>
              </li>
              <li className="curator-social__list__item">
                <svg width="22" height="22">
                  <use href={`${Svg}#icon-linked-in`} />
                </svg>
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
};
