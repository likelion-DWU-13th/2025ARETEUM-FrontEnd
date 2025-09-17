import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./pages/GlobalStyles";
import Intro from "./pages/Booth-Intro/Intro";
import Detail from "./pages/Booth-Intro/Description";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/booth" element={<Intro />} />
        <Route path="/booth-detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
