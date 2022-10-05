import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../../API";

export const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [eventsToMap, setEventsToMap] = useState([]);

  useEffect(() => {
    async function FetchCourses() {
      const course = await getEvents();
      setEvents(course);
    }
    FetchCourses();
  }, []);

  useEffect(() => {
    if (events) {
      setEventsToMap(events.slice(6));
    }
  }, [events]);

  return (
    <div className="schedule-section">
      <div className="container">
        <h2 className="text schedule-title">
          Our Events <br />
          <span className="title">Lectures & workshops</span>
        </h2>

        <ul className="schedule-list">
          {eventsToMap &&
            eventsToMap.map((events) => (
              <li key={events._id} className="schedule-list__item">
                <span className="schedule-list__item_span">
                  {events.dates.date.slice(-2)}
                </span>
                <div className="schedule-data">
                  <p className="schedule-list__item_mounth">
                    {events.dates.date.slice(0, 3)}
                  </p>
                  <p className="schedule-list__item_time">
                    {events.dates.time}
                  </p>
                </div>

                <div className="schedule-info">
                  <h3 className="schedule-list__item-title">
                    {events.eventInfo}
                  </h3>
                  <p className="schedule-list__item_text">{events.category}</p>
                </div>
                <Link
                  className="schedule-list__item_btn button-outlined"
                  to={`/events/${events._id}`}
                  state={[events, eventsToMap]}
                >
                  View more
                </Link>
              </li>
            ))}
        </ul>
        <div className="schedule-additional-info__container">
          <p className="schedule-text">Do you want more?</p>

          <button className="header-button gradient btn-hover" type="button">
            <Link to="/events" className="link">
              Explore all events
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
