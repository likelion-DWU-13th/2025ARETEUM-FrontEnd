import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./pages/GlobalStyles";
import Intro from "./pages/Booth-Intro/Intro";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/booth" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
