import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/variables.css";
import { Home } from "./pages/Home";
const AboutUsPages = lazy(() =>
  import("./pages/AboutUs" /* webpackChunkName: "AboutUsPages" */)
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPages />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
