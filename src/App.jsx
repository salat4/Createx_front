import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/variables.css";

const Home = lazy(() =>
  import("./pages/Home" /* webpackChunkName: "Home" */)
);
const ContactPage = lazy(() =>
import("./pages/Contact" /* webpackChunkName: "ContactPage" */)
);
const AboutUsPages = lazy(() =>
  import("./pages/AboutUs" /* webpackChunkName: "AboutUsPages" */)
);
const EventsPages = lazy(() =>
  import("./pages/Events" /* webpackChunkName: "EventsPages" */)
);
const BlogsPages = lazy(() =>
  import("./pages/Blogs" /* webpackChunkName: "BlogsPages" */)
);

const EventPage = lazy(() =>
  import("./pages/Event" /* webpackChunkName: "EventPage" */)
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPages />} />
          <Route path="/events" element={<EventsPages />} />
          <Route path="/blog" element={<BlogsPages />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
