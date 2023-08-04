import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import { Button, Divider, useMediaQuery } from "@mui/material";
import { reserveButtonStyle } from "../Content";
import SearchDest from "../../Search_Page/Components/SearchDest"
import DatePPicker from "../../Search_Page/Components/DatePicker";
import Collapsible from "../../Search_Page/Components/Collapsible";
import "../../Search_Page/Stylesheets/DatePicker.css"

export default function NavBot() {
  const isSmall = useMediaQuery('(max-width:700px)')
  const [startDate, setStartDate] = useState(new Date("2023/10/1"));
  // ERROR: ENDDATE ALWAYS STUCK AT 2023/09/30
  const [endDate, setEndDate] = useState(new Date("2023/10/5"));

  const [dest, setDest] = useState("")
  const [room, setRoom] =useState(1)
  const [pax, setPax] =useState(1)

  // Update input_dict
  // useEffect(() => {
  //   setStartDate(startDate);
  //   setEndDate(endDate);
  //   setDest(dest);
  //   setRoom(room);
  //   setPax(pax);
  // }, []);

  // function setInputs(input) {
  //   return {
  //   }
  // }

  function setInputs(input) {
    // const isEmpty = checkFields(dest, startDate, endDate, room, pax);
    // if (isEmpty) {
    //   alert("Please fill in all fields");
    // }
    fetch("http://localhost:8000/input", {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    body: JSON.stringify(input)
    }).then((response) => response.json()) // Parse the response as JSON
    .then((data) => console.log(data)) // Do something with the data
    .catch((error) => console.error(error));
    // alert("Send data?")
    console.log("Inputs posted to /inputs", JSON.stringify(input));
  }

  return (
    <>
      <div className="navbar-bottom">
        <div className = "search-bar-container">
          <div> Destination</div>
          <SearchDest setDest={setDest} ></SearchDest>
        </div>
        <div className="stay-duration-container">
        <div> Stay Duration </div>
          {/* <DatePPicker className="date-picker" selected={startDate} onChange={(date) => setStartDate(date)} ></DatePPicker> */}
          <DatePPicker className="date-picker" startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} ></DatePPicker>
        {/* <DatePPicker className="date-picker" endDate={endDate}></DatePPicker> */}
        </div>
        <div className="room-pax-container">
        <Collapsible room={room} pax={pax} setRoom={setRoom} setPax={setPax} ></Collapsible>
      </div>
        <div className="navbar-bottom links">
          {/* <a href="tel:+65 -68181888">
            <CallIcon />
            +65 -68181888
          </a> */}
          <Link to="/results">
            <Button onClick={() => setInputs({
              "dest_id": dest, 
              "check_in": startDate, 
              "check_out": endDate, 
              "rooms": room, 
              "guests": pax
            })}
            // <Button
              sx={{
                ...reserveButtonStyle,
                fontSize: isSmall ? "0.75rem" : "auto",
              }}
            >
              Find room
            </Button>
          </Link>
        </div>
      </div>
      
      <Divider sx={{ bgcolor: "white" }} />
      
      <Divider sx={{ bgcolor: "white" }} />
    </>
  );
}