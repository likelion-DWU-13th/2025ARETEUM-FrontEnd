import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./pages/GlobalStyles";
import Intro from "./pages/Booth-Intro/Intro";
import Detail from "./pages/Booth-Intro/Description";
import MakersInfo from "./pages/Makers-Info/MakersInfo";
import Somtalk from "./pages/Somtalk/Somtalk";
import MainPage from "./pages/MainPage/MainPage";
import First from "./pages/OnBoarding/First";
import TimeTable from "./pages/TimeTable/TimeTable";
<<<<<<< HEAD
import Description from "./pages/Booth-Intro/Description";
=======
import BoothArray from "./pages/BoothArray/BoothArray";
>>>>>>> f98631abccc70ea20bbe94b8a9adc4320bd0b266

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/booth" element={<Intro />} />
        <Route path="/booth-detail/:boothId" element={<Description />} />
        <Route path='/' element={<First />} />
        <Route path="/Somtalk" element={<Somtalk />} />
        <Route path="/makersInfo" element={<MakersInfo />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/BoothArray" element={<BoothArray />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
