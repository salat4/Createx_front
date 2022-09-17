import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/variables.css";
import { Start } from "./pages/start";
const AboutUsPages = lazy(() =>
  import("./pages/AboutUs" /* webpackChunkName: "AboutUsPages" */)
);
const EventsPages = lazy(() =>
  import("./pages/Events" /* webpackChunkName: "EventsPages" */)
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading"}>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/about" element={<AboutUsPages />} />
          <Route path="/events" element={<EventsPages />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
