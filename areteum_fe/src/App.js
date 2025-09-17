import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./pages/GlobalStyles";
import Intro from "./pages/Booth-Intro/Intro";
import Detail from "./pages/Booth-Intro/Description";
import MakersInfo from "./pages/Makers-Info/MakersInfo";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/booth" element={<Intro />} />
        <Route path="/booth-detail" element={<Detail />} />
        <Route path="/makersInfo" element={<MakersInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
