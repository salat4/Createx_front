import { useLocation } from "react-router-dom";
import Hero from "../components/Event/Hero";
import Info from "../components/Event/Info";
import Speaker from "../components/Event/Speaker";
import Mailing from "../components/Event/Mailing";
import RequestForm from "../components/Event/RequestForm";
import Slider from "../components/Event/Slider";

export default function EventPage() {
  const location = useLocation();
  const { state } = location;

  return (
    <>
      <Hero />
      <Info state={state} />
      <Speaker state={state} />
      <Mailing />
      <RequestForm />
      <Slider />
    </>
  );
}
