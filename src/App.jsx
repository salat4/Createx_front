import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/variables.css";
import { Home } from "./pages/Home";


const AboutUsPages = lazy(() =>
  import("./pages/AboutUs" /* webpackChunkName: "AboutUsPages" */)
);
const EventsPages = lazy(() =>
  import("./pages/Events" /* webpackChunkName: "EventsPages" */)
);

const Blogs = lazy(() =>
  import("./pages/Blogs" /* webpackChunkName: "BlogsPages" */)

);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPages />} />
          <Route path="/events" element={<EventsPages />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
