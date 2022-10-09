import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Hero from "../components/Event/Hero";
import { useReducer } from "react";
import Info from "../components/Event/Info";
import Speaker from "../components/Event/Speaker";
import Mailing from "../components/Event/Mailing";
import RequestForm from "../components/Event/RequestForm";
import Slider from "../components/Event/Slider";
import { getEvents } from "API";
import PageNotFound from "./NotFound";

const initialState = null;

function reducer(state, { type, payload }) {
  switch (type) {
    case "fetch":
      return {
        eventObj: payload.event,
        baseEvents: payload.events,
        error: payload.error,
      };

    case "switchPage":
      return {
        eventObj: payload[0],
        baseEvents: payload[1],
        error: payload.error,
      };

    case "error":
      return { ...state, error: payload };

    default:
      return state;
  }
}

export default function EventPage() {
  const [stateInfo, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const params = useParams();

  const { state } = location;

  useEffect(() => {
    if (!state) {
      getAllEvents();
      async function getAllEvents() {
        try {
          const events = await getEvents(params.id);
          const event = events.find((el) => el._id === params.id);
          const payload = {
            events,
            event,
            error: false,
          };
          dispatch({ type: "fetch", payload });
        } catch (error) {
          dispatch({ type: "error", payload: true });
        }
      }
    } else {
      dispatch({ type: "switchPage", payload: state });
    }
  }, [params.id, state]);

  return (
    <>
      {stateInfo && !stateInfo.error && (
        <>
          <Hero />
          <Info state={stateInfo} />
          <Speaker state={stateInfo} /> <Mailing /> <RequestForm />{" "}
          <Slider state={stateInfo} />
        </>
      )}
      {stateInfo && stateInfo.error && (
        <PageNotFound title="Event is not found" />
      )}
    </>
  );
}
