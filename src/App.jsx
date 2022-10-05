import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/variables.css";

const Home = lazy(() => import("./pages/Home" /* webpackChunkName: "Home" */));
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
const BlogPage = lazy(() =>
  import("./pages/Blog" /*webpackChunkName: "BlogPage" */)
);
const CoursesPage = lazy(() =>
  import("./pages/Courses" /*webpackChunkName: "CoursesPage" */)
);

const Course = lazy(() =>
  import("./pages/Course" /*webpackChunkName: "CoursePage" */)
);

const Loader = lazy(() =>
  import("./components/loader" /*webpackChunkName: "Loader" */)
);
const Footer = lazy(() =>
  import("./components/footer" /*webpackChunkName: "Loader" */)
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/createx" element={<Home />} />
            <Route path="/createx/courses" element={<CoursesPage />} />
            <Route path="/createx/courses/:id" element={<Course />} />
            <Route path="/createx/about" element={<AboutUsPages />} />
            <Route path="/createx/events" element={<EventsPages />} />
            <Route path="/createx/blogs" element={<BlogsPages />} />
            <Route path="/createx/blogs/:blog_id" element={<BlogPage />} />
            <Route path="/createx/events/:id" element={<EventPage />} />
            <Route path="/createx/contacts" element={<ContactPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
