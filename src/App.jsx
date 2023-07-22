import "./App.css";
import NavBar from "./Pages/Room_Page/Components/RoomNavBar";
import FindReserve from "./components/pages/findreserve";
import Rewards from "./components/pages/rewards";
import Hotels from "./components/pages/hotels";
import Contact from "./components/pages/contact";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home_Page/Home";
import Room from "./Pages/Room_Page/Room";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findreserve" element={<Room/>} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/rewards" component={Rewards} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </>
  );
}

export default App;
