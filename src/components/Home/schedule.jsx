export const Schedule = () => {
  return (
    <div className="schedule-section">
      <div className="container">
        <h2 className="text schedule-title">
          Our Events <br />
          <span className="title">Lectures & workshops</span>
        </h2>

        <ul className="schedule-list">
          <li className="schedule-list__item">
            <span className="schedule-list__item_span">05</span>
            <div className="schedule-data">
              <p className="schedule-list__item_mounth">August </p>
              <p className="schedule-list__item_time">11:00 - 14:00</p>
            </div>

            <div className="schedule-info">
              <h3 className="schedule-list__item-title">
                Formation of the organizational structure of the company in the
                face of uncertainty.
              </h3>
              <p className="schedule-list__item_text">Online master-class</p>
            </div>
            <button
              className="schedule-list__item_btn button-outlined"
              type="button"
            >
              View more
            </button>
          </li>
          <li className="schedule-list__item">
            <span className="schedule-list__item_span">05</span>
            <div className="schedule-data">
              <p className="schedule-list__item_mounth">August </p>
              <p className="schedule-list__item_time">11:00 - 14:00</p>
            </div>

            <div className="schedule-info">
              <h3 className="schedule-list__item-title">
                Formation of the organizational structure of the company in the
                face of uncertainty.
              </h3>
              <p className="schedule-list__item_text">Online master-class</p>
            </div>
            <button
              className="schedule-list__item_btn button-outlined"
              type="button"
            >
              View more
            </button>
          </li>
          <li className="schedule-list__item">
            <span className="schedule-list__item_span">05</span>
            <div className="schedule-data">
              <p className="schedule-list__item_mounth">August </p>
              <p className="schedule-list__item_time">11:00 - 14:00</p>
            </div>

            <div className="schedule-info">
              <h3 className="schedule-list__item-title">
                Formation of the organizational structure of the company in the
                face of uncertainty.
              </h3>
              <p className="schedule-list__item_text">Online master-class</p>
            </div>
            <button
              className="schedule-list__item_btn button-outlined"
              type="button"
            >
              View more
            </button>
          </li>
        </ul>
        <div className="schedule-additional-info__container">
          <p className="schedule-text">Do you want more?</p>
          <button className="header-button gradient btn-hover" type="button">
            Explore all events
          </button>
        </div>
      </div>
    </div>
  );
};
