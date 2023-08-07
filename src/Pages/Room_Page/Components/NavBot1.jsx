import { Link } from "react-router-dom";
import React, { useState } from "react";

import CallIcon from "@mui/icons-material/Call";
import PlaceIcon from '@mui/icons-material/Place';
import PersonIcon from '@mui/icons-material/Person';
import DateRange from '@mui/icons-material/DateRange';
import HotelIcon from '@mui/icons-material/Hotel';

import { Button, Divider, useMediaQuery } from "@mui/material";
import { reserveButtonStyle } from "../Content";
import Collapsible from "../../Search_Page/Components/Collapsible";
import "../../Search_Page/Stylesheets/DatePicker.css"
import "../Stylesheets/NavBot.css"

import Grid from '@mui/material/Grid';

import LowerGrid from "./LowerGrid";
import Popup from "./Popup"

import SearchDest from "../../Search_Page/Components/SearchDest";
import DatePPicker from "../../Search_Page/Components/DatePicker";
import Counter from "../../Search_Page/Components/Counter"





export default function NavBot() {

    const isLarge = useMediaQuery('(min-width:1000px)')
    const isSmall = useMediaQuery('(max-width:1000px)')
    const [startDate, setStartDate] = useState(new Date("2023/08/10"));
    const [endDate, setEndDate] = useState(new Date("2023/08/12"));
    const [open, setOpen] = useState(false);
    const [dest, setDest] = useState("")
    const [room, setRoom] =useState(1)
    const [pax, setPax] =useState(1)
    const [func, setFunc] = useState(null)

    function multipleState(foo, bar){
      setOpen(foo)
      setFunc(bar)
  }

  // function setInputs(input) {
  //   if (input["dest_id"]=="" 
  //   || input["check_in"]=="" 
  //   || input["check_out"]=="" 
  //   || input["rooms"]=="" 
  //   || input["guests"]=="") 
  //   {alert("Please fill in all fields");}

  //   else {
  //     fetch("http://localhost:8000/input", {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: {
  //       "Content-type": "application/json"
  //     },
  //     body: JSON.stringify(input)
  //   })
  //   .then((response) => response.json()) // Parse the response as JSON
  //   .catch((error) => console.error("Error occurred during fetch /input:", error));
  //   console.log("NAVBOT1.JSX: Inputs posted to /input", JSON.stringify(input));
  // }
  //   }
    

  return (
    <>
      <div className="navbar-bottom">
        <Grid container spacing={4}>
        <Grid item xs={3}>

        <div className="dest-header" align="left" onClick={() =>
           multipleState(true, 
           <SearchDest setDest={setDest}/>)}>

        <PlaceIcon></PlaceIcon>
          <span >
            DESTINATION
            </span>
            </div>
        </Grid>

        <Grid item xs={3}>
        
        <div className="date-header" align="left" onClick={() => multipleState(true, <DatePPicker startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}/>)}>
        <DateRange></DateRange>
          <span>DATES</span>
        </div>
        </Grid>

        <Grid item xs={2} align="left" onClick={() => multipleState(true, <Counter className="room-counter" quantity={room} setQuantity={setRoom}></Counter>)}>
        <div className="room-header" align="left">
        <HotelIcon></HotelIcon>
        <span >   {room} ROOM </span>
        </div>
        </Grid>

        <Grid item xs={2}>
        <div className="room-header" align="left" onClick={() => multipleState(true, <Counter className="pax-counter" quantity={pax} setQuantity={setPax}></Counter>)}>
        <PersonIcon></PersonIcon>
        <span >{pax} GUESTS</span>
        </div>
        </Grid>


        <Grid item xs={1}>
        {isSmall && 
        <Link to="/results">
        <Button
        onClick={() =>
            setInputs({
              dest_id: dest,
              check_in: startDate,
              check_out: endDate,
              rooms: room,
              guests: pax,
            })
          }
          sx={{
            ...reserveButtonStyle,
            fontSize: isSmall ? "0.75rem" : "auto",
          }}
        >
          Find room
        </Button>
      </Link>}
        </Grid>

        {/* Pass dest to lowergrid as a prop. */}
        {isLarge && <LowerGrid 
        room={room} 
        pax={pax} 
        setRoom={setRoom} 
        setPax={setPax} 
        startDate={startDate} 
        endDate={endDate} 
        setStartDate={setStartDate} 
        setEndDate={setEndDate} 
        // dest={dest} 
        setDest={setDest}
        />} 

        {open ? <Popup body={func} closePopup={() => setOpen(false)} /> : null}


        
{/* 
        <Grid item xs={3}>
        <Paper className='grid-elements'></Paper>
        </Grid>
        <Grid item xs={3}>
        <Paper className='grid-elements'>dates</Paper>
        </Grid>
        <Grid item xs={3}>
        <Paper className='grid-elements'>dates</Paper>
        
        </Grid>
        <Grid item xs={3}>
        <Paper className='grid-elements'>button</Paper>
        </Grid> */}

        </Grid>
        {/* <div className = "search-bar-container">

          <SearchDest setDest={setDest}></SearchDest>
        </div>
        <div className="stay-duration-container" align="left">
        
          <DatePPicker className="date-picker" startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}></DatePPicker>
        </div>
        <div className="room-pax-container">
        <Collapsible room={room} pax={pax} setRoom={setRoom} setPax={setPax}></Collapsible>
      </div>
        <div className="navbar-bottom links"> */}
          {/* <a href="tel:+65 -68181888">
            <CallIcon />
            +65 -68181888
          </a> */}
          
        </div>
      {/* </div> */}
      
      <Divider sx={{ bgcolor: "white" }} />
      
      <Divider sx={{ bgcolor: "white" }} />
    </>
  );
}
