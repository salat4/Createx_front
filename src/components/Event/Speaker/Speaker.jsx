import { useState, useEffect } from "react";

export const Speaker = ({ events, id }) => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (events) {
      const eventArr = events.filter((item) => item._id === id);
      setEvent(eventArr);
    }
  }, [events, id]);

  return (
    <section>
      <div className="container">
        <div className="speaker_container">
          <div className="speaker_image-container">
            {event &&
              event.map(({ profilePicture }) => {
                return <img src={profilePicture} alt="poster speaker" />;
              })}
          </div>
          <div className="speaker_info-container"></div>
        </div>
      </div>
    </section>
  );
};
