import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./pages/GlobalStyles";
import Intro from "./pages/Booth-Intro/Intro";
import Detail from "./pages/Booth-Intro/Description";
import First from "./pages/OnBoarding/First";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/booth" element={<Intro />} />
        <Route path="/booth-detail" element={<Detail />} />
        <Route path='/' element={<First/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
