import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./pages/GlobalStyles";
import Intro from "./pages/Booth-Intro/Intro";
import Detail from "./pages/Booth-Intro/Description";
import Somtalk from "./pages/Somtalk/Somtalk";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/booth" element={<Intro />} />
        <Route path="/booth-detail" element={<Detail />} />
        <Route path="/Somtalk" element={<Somtalk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
