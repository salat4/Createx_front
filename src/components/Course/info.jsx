import { useLocation } from "react-router-dom";
import Svg from "../../images/symbol-defs.svg";

export const CourseInfo = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="info-course__section">
      <div className="container">
        <h2 className="about-title benefit-title">
          Main steps <br />
          <span className="about-title__span">Online learning process</span>
        </h2>
        <div className="course-step__wrap">
          <ul className="course-step__list">
            <li className="course-step__list__item">
              <span className="step-number">01</span>
              <h3>{state.process[0].title}</h3>
              <p>{state.process[0].text}</p>
            </li>
            <li className="course-step__list__item">
              <span className="step-number">02</span>
              <h3>{state.process[1].title}</h3>
              <p>{state.process[1].text}</p>
            </li>
            <li className="course-step__list__item">
              <span className="step-number">03</span>
              <h3>{state.process[2].title}</h3>
              <p>{state.process[2].text}</p>
            </li>
            <li className="course-step__list__item">
              <span className="step-number">04</span>
              <h3>{state.process[3].title}</h3>
              <p>{state.process[3].text}</p>
            </li>
          </ul>
        </div>

        <div className="course-form__wrap">
          <p className="course-form__text">20% discount for early birds!</p>
          <form className="course-form" autoComplete="off">
            <label className="course-form__label" htmlFor="name">
              Full Name
              <input
                className="course-form__input"
                name="name"
                type="text"
                placeholder="Your full name"
              />
            </label>
            <label className="course-form__label" htmlFor="email">
              Email
              <input
                className="course-form__input"
                name="email"
                type="email"
                placeholder="Your working email"
              />
            </label>
            <label className="course-form__label" htmlFor="email">
              Phone number
              <input
                className="course-form__input"
                name="phone"
                type="phone"
                placeholder="Your phone number"
              />
            </label>
            <button className="course-form__btn gradient">
              Regular Button
            </button>
          </form>
        </div>
        <div className="course-benefit__wrap">
          <h2 className="about-title ">
            For whom? <br />
            <span className="about-title__span">
              Who will benefit from the course:
            </span>
          </h2>
          <div>
            <ul className="course-about__list">
              {state.benefits.map((b) => (
                <li className="about-list__item">
                  <svg width="20" height="20">
                    <use href={`${Svg}#icon-checked`} />
                  </svg>
                  <p className="about-list__item-text">{b}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
