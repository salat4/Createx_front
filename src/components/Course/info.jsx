import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Svg from "../../images/symbol-defs.svg";

export const CourseInfo = () => {
  const location = useLocation();
  const { state } = location;
  const [keyTheme, setKeyTheme] = useState(null);
  const [valueTheme, setValueTheme] = useState(null);
  const [indexInfo, setindexInfo] = useState(null);

  useEffect(() => {
    const arr = state.program;

    const arrKey = [];
    const arrValue = [];

    for (const o of arr) {
      for (const key in o) {
        arrKey.push(key);
        arrValue.push(o[key]);
      }
    }

    setKeyTheme(arrKey);
    setValueTheme(arrValue);
  }, [state]);

  const openInfo = (e) => {
    const { id } = e.target;
    if (id === indexInfo) {
      setindexInfo(100);
      return;
    }
    setindexInfo(id);
  };

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
              {state.benefits.map((b, indx) => (
                <li key={indx} className="about-list__item course-about__list__item">
                  <p className="about-list__item-text">{b.trim()}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="course-info__wrap">
        <h2 className="about-title ">
        Course program <br />
          <span className="about-title__span">What will you learn</span>
        </h2>          <ul className="info_about-list">
            {keyTheme &&
              keyTheme.map((data, index) => {
                return (
                  <div className="info_about-container" key={index}>
                    <li className="info_about-item">
                      <button
                        id={index}
                        className="info_button-list"
                        onClick={openInfo}
                      >
                        {index === Number(indexInfo) ? (
                          <svg id={index} width="18" height="18">
                            <use id={index} href={`${Svg}#icon-Minus`} />
                          </svg>
                        ) : (
                          <svg id={index} width="18" height="18">
                            <use id={index} href={`${Svg}#icon-plus`} />
                          </svg>
                        )}
                      </button>
                      <span className="info_theme">{data}.</span>
                      {valueTheme && (
                        <span className="info_theme-text">
                          {valueTheme.filter((_, ind) => ind === index)[0]}
                        </span>
                      )}
                    </li>
                    {index === Number(indexInfo) && (
                      <p>
                        Nulla amet, sagittis potenti rhoncus sit. Elit lectus
                        nec pulvinar aliquet donec enim, ornare. Lacus facilisi
                        curabitur turpis varius mauris. Nisi, tempus risus, odio
                        mi suscipit sed. Curabitur faucibus porttitor quis sem
                        lacus, arcu feugiat facilisis. Commodo nunc orci vitae
                        accumsan id.
                      </p>
                    )}
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
