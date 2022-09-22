import { useEffect, useState } from "react";
import getEvents from "../API/getEvents";
import Hero from "../components/Event/Hero";
import Info from "../components/Event/Info";
// import Speaker from "../components/Event/Speaker";
// import ForWhom from "../components/Event/ForWhom";
// import Mailing from "../components/Event/Mailing";
// import RequestForm from "../components/Event/RequestForm";
// import Slider from "../components/Event/Slider";

export default function EventPage({ id }) {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    Event();
    async function Event() {
      const event = await getEvents();
      setEvents(event);
    }
  }, []);

  return (
    <>
      <Hero />
      <Info events={events} id={id} />
      {/* <Speaker /> */}
      {/* <ForWhom /> */}
      {/* <Mailing /> */}
      {/* <RequestForm /> */}
      {/* <Slider />  */}
    </>
  );
}
