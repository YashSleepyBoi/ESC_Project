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

function App() {
  const [isBottomDisplay, setIsBottomDisplay] = useState(false);
  console.log(isBottomDisplay)
  return (
    <>
      <NavBar bottom={isBottomDisplay}/>
      <Routes>
<<<<<<< Updated upstream
        <Route path="/" element={<Home setBottom={setIsBottomDisplay}/>} />
        <Route path="/findreserve" element={<Room setBottom={setIsBottomDisplay}/>} />
        <Route path="/profile" element={<Profile setBottom={setIsBottomDisplay}/>}/>
        <Route path="/editprofile" element={<EditProfile setBottom={setIsBottomDisplay}/>}/>
        <Route path="/hotels" element={<Hotel setBottom={setIsBottomDisplay}/>} />
        <Route path="/login" element={<Login setBottom={setIsBottomDisplay}/>} />
        <Route path="/register" element={<Register setBottom={setIsBottomDisplay}/>} />
        <Route path="/results" element={<Results setBottom={setIsBottomDisplay}/>} />
        <Route path="/roomreserve" element={<Room_Reserve setBottom={setIsBottomDisplay}/>} />
=======
        <Route path="/" element={<Home />} />
        <Route path="/findreserve" element={<Room/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/editprofile" element={<EditProfile/>}/>
        <Route path="/hotels/:hotel_id" element={<Hotel/>} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/results" element={<Results/>} />
        <Route path="/payment" element={<Payment/>} />
        {/* TODO: remove success and cancel routes since they shouldn't be accessible via router */}
        <Route path="/success" element={<Success/>} />
        <Route path="/cancel" element={<Cancel/>} />
>>>>>>> Stashed changes
      </Routes>
      
    </>
  );
}

export default App;
