import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Event/Hero";
import Info from "../components/Event/Info";
import Speaker from "../components/Event/Speaker";
import Mailing from "../components/Event/Mailing";
import RequestForm from "../components/Event/RequestForm";
import Slider from "../components/Event/Slider";

export default function EventPage() {
  const [stateInfo, setStateInfo] = useState(null);
  const location = useLocation();
  const eventObj = location.state[0];
  const baseEvents = location.state[1];
  const { state } = location;
  useEffect(() => {
    setStateInfo({
      eventObj,
      baseEvents,
    });
  }, [baseEvents, eventObj, state]);

  return (
    <>
      <Hero />
      {stateInfo && (
        <>
          <Info state={stateInfo} />
          <Speaker state={stateInfo} />
        </>
      )}
      <Mailing />
      <RequestForm />
      {stateInfo && <Slider state={stateInfo} />}
    </>
  );
}
