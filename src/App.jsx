import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer";
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
const BlogPage = lazy(()=>
  import("./pages/Blog" /*webpackChunkName: "EventPage" */)
)
const CoursesPage = lazy(()=>
  import("./pages/Courses" /*webpackChunkName: "CoursesPage" */)
)


function App() {
  return (
    <>
    <BrowserRouter>
      <Suspense fallback={"Loading"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutUsPages />} />
          <Route path="/events" element={<EventsPages />} />
          <Route path="/blogs" element={<BlogsPages />} />
          <Route path="/blogs/:blog_id" element={<BlogPage />} />
          <Route path="/events/:id" element={<EventPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>
        <Footer/>
      </Suspense>
 
    </BrowserRouter>
    
    </>
  );
}

export default App;
