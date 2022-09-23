import { useEffect, useState } from "react";
import getEvents from "../API/getEvents";
import Hero from "../components/Event/Hero";
import Info from "../components/Event/Info";
import Speaker from "../components/Event/Speaker";
import Mailing from "../components/Event/Mailing";
// import RequestForm from "../components/Event/RequestForm";
// import Slider from "../components/Event/Slider";

export default function EventPage({ id }) {
  const [event, setEvent] = useState(null);
  useEffect(() => {
    Event();
    async function Event() {
      const eventFetch = await getEvents();
      const eventFilter = eventFetch.filter((item) => item._id === id);
      setEvent(eventFilter);
    }
  }, [id]);

  return (
    <>
      <Hero />
      <Info events={event} id={id} />
      <Speaker event={event} id={id} />
      <Mailing />
      {/* <RequestForm /> */}
      {/* <Slider />  */}
    </>
  );
}
