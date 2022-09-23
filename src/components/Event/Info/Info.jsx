import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import pathToSvg from "../../../images/symbol-defs.svg";

export const Info = ({ events, id }) => {
  const [keyTheme, setKeyTheme] = useState(null);
  const [valueTheme, setValueTheme] = useState(null);
  const [event, setEvent] = useState(null);
  const [indexInfo, setindexInfo] = useState(null);

  useEffect(() => {
    const arrKey = [];
    const arrValue = [];
    setindexInfo(100);
    if (events) {
      events.map(({ theme }) => {
        for (const key in theme) {
          arrKey.push(key);
          arrValue.push(theme[key]);
        }
        return theme;
      });
      setKeyTheme(arrKey);
      setValueTheme(arrValue);
      setEvent(events);
    }
  }, [events]);

  const openInfo = (e) => {
    const { id } = e.target;
    if (id === indexInfo) {
      setindexInfo(100);
      return;
    }

    setindexInfo(id);
  };

  return (
    <section className="info">
      <div className="container">
        <div className="info_container">
          <div>
            <p className="info_about-title">We will talk about:</p>
            {event && (
              <ul className="info_about-list">
                {keyTheme &&
                  keyTheme.map((data, index) => {
                    return (
                      <li
                        onClick={openInfo}
                        id={index}
                        className="info_about-item"
                        key={index}
                      >
                        <button id={index} className="info_button-list">
                          {index === Number(indexInfo) ? (
                            <svg id={index} width="18" height="18">
                              <use
                                id={index}
                                href={`${pathToSvg}#icon-Minus`}
                              />
                            </svg>
                          ) : (
                            <svg id={index} width="18" height="18">
                              <use id={index} href={`${pathToSvg}#icon-plus`} />
                            </svg>
                          )}
                        </button>
                        <span className="info_theme">{data}.</span>
                        {valueTheme && (
                          <span className="info_theme-text">
                            {valueTheme.filter((elem, ind) => ind === index)[0]}
                          </span>
                        )}
                      </li>
                    );
                  })}
              </ul>
            )}
          </div>
          <div className="info_sidebar_container">
            <p className="info_sidebar_title">Time</p>
            {events &&
              events
                .filter((data) => data._id === id)
                .map(({ dates }) => {
                  return (
                    <p key={uuid()} className="info_sidebar_title-time">
                      {dates.date}, {dates.time}
                    </p>
                  );
                })}
            <p className="info_sidebar_title-text">
              Metus turpis sit lorem lacus, in elit tellus lacus.
            </p>
            <p className="info_sidebar_price-title">Price</p>
            <p className="info_sidebar_price">Free</p>
            <p className="info_sidebar_price-text">
              Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris
              quam ac elit tristique dis.
            </p>
            <div className="info_sidebar_link">
              <Link to="https://www.facebook.com/">Event on Facebook</Link>
            </div>

            <button className="info_sidebar-button">Join the event</button>
          </div>
        </div>
      </div>
    </section>
  );
};
