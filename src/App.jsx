import "./styles/variables.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Start } from "./pages/start";
import AboutUsPages from "./pages/AboutUs";
import { Blogs } from "./pages/Blogs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/about" element={<AboutUsPages />} />
        <Route path="/blogs" element={ <Blogs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
