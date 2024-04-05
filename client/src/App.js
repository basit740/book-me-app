import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/Navbar";
import Footer from "./pages/Footer";
import { Home } from "./pages/Home";
import { MyCalendar } from "./components/calendar/Calendar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/calendar" exact element={<MyCalendar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
