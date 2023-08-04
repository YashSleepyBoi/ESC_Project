import { Link } from "react-router-dom";
import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import { Button, Divider, useMediaQuery } from "@mui/material";
import { reserveButtonStyle } from "../Content";
import SearchDest from "../../Search_Page/Components/SearchDest"
import DatePPicker from "../../Search_Page/Components/DatePicker";
import Collapsible from "../../Search_Page/Components/Collapsible";
import "../../Search_Page/Stylesheets/DatePicker.css"


export default function NavBot() {
    const isSmall = useMediaQuery('(max-width:700px)')
    const [startDate, setStartDate] = useState(new Date("2023/08/1"));
    const [endDate, setEndDate] = useState(new Date("2023/08/2"));

    const [dest, setDest] = useState("")
    const [room, setRoom] =useState(1)
    const [pax, setPax] =useState(1)
    

  return (
    <>
      <div className="navbar-bottom">
        {/* *********************************************** */}
        {/* SEARCH BAR : Destination */}
        <div className = "search-bar-container">
          <div> Destination</div>
          <SearchDest setDest={setDest}></SearchDest>
        </div>
        {/* *********************************************** */}
        <div className="stay-duration-container">
        <div> Stay Duration </div>
          <DatePPicker className="date-picker" startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}></DatePPicker>
        </div>
        {/* *********************************************** */}
        <div className="room-pax-container">
        <Collapsible room={room} pax={pax} setRoom={setRoom} setPax={setPax}></Collapsible>
      </div>
      {/* *********************************************** */}
        <div className="navbar-bottom links">
          {/* <a href="tel:+65 -68181888">
            <CallIcon />
            +65 -68181888
          </a> */}
          <Link to="/findreserve">
            <Button
              sx={{
                ...reserveButtonStyle,
                fontSize: isSmall ? "0.5rem" : "auto",
              }}
            >
              Find room
            </Button>
          </Link>
        </div>
        {/* *********************************************** */}
      </div>
      
      <Divider sx={{ bgcolor: "white" }} />
      
      <Divider sx={{ bgcolor: "white" }} />
    </>
  );
}
