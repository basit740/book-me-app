import { BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/navbar/Navbar";
import Developers from "./pages/Developers";
import Footer from "./pages/Footer";
import Join from "./pages/Join";
import Loading from "./pages/Header";
import Partners from "./pages/Partners";
import Properties from "./pages/Properties";
import Subscribe from "./pages/Subscribe";

import MyCalendar from "./components/calander/Calander";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Loading />
        <Partners />
        <Properties />
        <AboutUs />
        <Developers />
        <Join />
        <Subscribe />
        <MyCalendar />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
