import "./styles/variables.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Start } from "./pages/start";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
