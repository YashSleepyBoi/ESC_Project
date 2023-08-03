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
import EditProfile from "./Pages/Profile_Page/edit_profile";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findreserve" element={<Room/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/editprofile" element={<EditProfile/>}/>
        <Route path="/hotels" element={<Hotel/>} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/results" element={<Results/>} />
      </Routes>
    </>
  );
}

export default App;
