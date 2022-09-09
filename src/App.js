import "./styles/variables.css";
import { HeroHeader } from "./components/hero-header";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeroHeader />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
