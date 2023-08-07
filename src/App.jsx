import "./App.css";
import { useState } from "react";
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
import EditProfile from "./Pages/Profile_Page/edit_profile";
import Room_Reserve from "./Pages/Room_Page/Room_Reserve";
import Payment from "./Pages/Payment_Page/Checkout";
import Success from "./Pages/Payment_Page/Components/Success";
import Cancel from "./Pages/Payment_Page/Components/Cancel";

 
function App() {
  const [isBottomDisplay, setIsBottomDisplay] = useState(false);
  return (
    <>
      <NavBar bottom={isBottomDisplay}/>
      <Routes>
        <Route path="/" element={<Home setBottom={setIsBottomDisplay}/>} />
        <Route path="/room/:hotel_id/:room_id/:guests/:start_date/:end_date" element={<Room setBottom={setIsBottomDisplay}/>} />
        <Route path="/hotels/:hotel_id/:start_date/:end_date" element={<Hotel setBottom={setIsBottomDisplay}/>} />
        <Route path="/profile" element={<Profile setBottom={setIsBottomDisplay}/>}/>
        <Route path="/editprofile" element={<EditProfile setBottom={setIsBottomDisplay}/>}/>
        <Route path="/hotels" element={<Hotel setBottom={setIsBottomDisplay}/>} />
        <Route path="/login" element={<Login setBottom={setIsBottomDisplay}/>} />
        <Route path="/register" element={<Register setBottom={setIsBottomDisplay}/>} />
        <Route path="/results" element={<Results setBottom={setIsBottomDisplay}/>} />
        <Route path="/roomreserve" element={<Room_Reserve setBottom={setIsBottomDisplay} />} />
        <Route path="/payment/:h_id/:r_id/:price/:start/:end/:guests/:rooms" element={<Payment setBottom={setIsBottomDisplay}/>} />
        {/* TODO: remove success and cancel routes since they shouldn't be accessible via router */}
        <Route path="/success" element={<Success setBottom={setIsBottomDisplay}/>} />
        <Route path="/cancel" element={<Cancel setBottom={setIsBottomDisplay}/>} />


      </Routes>
      
    </>
  );
}
 
export default App;