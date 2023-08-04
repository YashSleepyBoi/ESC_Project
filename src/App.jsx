import "./App.css";
import NavBar from "./Pages/Room_Page/Components/RoomNavBar";
import Hotel from "./Pages/Room_Page/Hotel"
import Contact from "./components/pages/contact";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home_Page/Home";
import Room from "./Pages/Room_Page/Room";
import Register from "./Pages/Register_Page/Register";
import Login from "./Pages/Login_Page/Login";
import Profile from "./Pages/Profile_Page/profile";
import Results from "./Pages/Results_Page/Results";
import Payment from "./Pages/Payment_Page/Checkout";
import Success from "./Pages/Payment_Page/Components/Success";
import Cancel from "./Pages/Payment_Page/Components/Cancel";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findreserve" element={<Room/>} />
        <Route path="/editprofile" element={<Profile/>}/>
        <Route path="/hotels" element={<Hotel/>} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/results" element={<Results/>} />
        <Route path="/payment" element={<Payment/>} />
        {/* TODO: remove success and cancel routes since they shouldn't be accessible via router */}
        <Route path="/success" element={<Success/>} />
        <Route path="/cancel" element={<Cancel/>} />
      </Routes>
    </>
  );
}

export default App;
