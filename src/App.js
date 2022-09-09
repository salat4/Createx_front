import "./styles/variables.css";
import { HeroHeader } from "./components/hero-header";

import {Footer} from "./components/footer"

import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeroHeader />} />
      <Route path="/" element={<Footer />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
