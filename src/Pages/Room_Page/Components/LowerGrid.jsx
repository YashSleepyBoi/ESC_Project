import { Link } from "react-router-dom";
import React, { useState } from "react";

import Grid from '@mui/material/Grid';

import SearchDest from "../../Search_Page/Components/SearchDest"
import DatePPicker from "../../Search_Page/Components/DatePicker";

import Counter from "../../Search_Page/Components/Counter"

import { Button, Divider, useMediaQuery } from "@mui/material";
import { reserveButtonStyle } from "../Content";


export default function LowerGrid({room,pax, setRoom, setPax, startDate, setEndDate, endDate, setStartDate, dest, clickHandler}) {

    // Msg from natalie: HOW TO GET DEST ID FROM SEARCH? 
    const dest1 = "RsBU";
    const newDest = dest;
    // console.log("setDest:",newDest);
    // console.log("PASSED DEST:", dest1)
    const isSmall = useMediaQuery('(max-width:700px)')
    
    // const [startDate, setStartDate] = useState(new Date("2023/08/1"));
    // const [endDate, setEndDate] = useState(new Date("2023/08/2"));

    function setInputs(input) {
      if (input["dest_id"]=="" 
      || input["check_in"]=="" 
      || input["check_out"]=="" 
      || input["rooms"]=="" 
      || input["guests"]=="") 
      {alert("Please fill in all fields");}
  
      else {
        fetch("http://localhost:8000/input", {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(input)
        
      })
      .then((response) => response.json()) // Parse the response as JSON
      .catch((error) => console.error("Error occurred during fetch /input:", error));
      console.log("NAVBOT1.JSX: Inputs posted to /input", JSON.stringify(input));
    }
      }

  return (
    <>
        <Grid item xs={3} className="tohide">
        <SearchDest clickHandler={clickHandler}></SearchDest>
        </Grid>

        <Grid item xs={3} align="left" className="tohide">
        <DatePPicker startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate}></DatePPicker>
        
        </Grid>
        <Grid item xs={2} className="tohide">
          <div align="left">
            <Counter className="room-counter" quantity={room} setQuantity={setRoom}></Counter>
          </div>
        </Grid>

        <Grid item xs={2} className="tohide">
          <div align="left">
            <Counter className="pax-counter" quantity={pax} setQuantity={setPax}></Counter>
          </div>
        </Grid>

        <Grid item xs={1} className="tohide"></Grid>

        <Grid item xs={1} className="tohide">
        
        <Link to="/results">
            <Button onClick={() => setInputs({
              "dest_id": dest, 
              "check_in": startDate, 
              "check_out": endDate, 
              "rooms": room, 
              "guests": pax
            })
          }
              sx={{
                ...reserveButtonStyle,
                fontSize: isSmall ? "0.75rem" : "auto",
              }}
            >
              Find room
            </Button>
          </Link>

        </Grid>
    </>
  )
}