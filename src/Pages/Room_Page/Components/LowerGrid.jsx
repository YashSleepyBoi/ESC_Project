import { Link } from "react-router-dom";
import React, { useState } from "react";

import Grid from '@mui/material/Grid';

import SearchDest from "../../Search_Page/Components/SearchDest"
import DatePPicker from "../../Search_Page/Components/DatePicker";

import Counter from "../../Search_Page/Components/Counter"

import { Button, Divider, useMediaQuery } from "@mui/material";
import { reserveButtonStyle } from "../Content";


export default function LowerGrid({room,pax, setRoom, setPax}) {

    
    const isSmall = useMediaQuery('(max-width:700px)')
    
    const [startDate, setStartDate] = useState(new Date("2023/08/1"));
    const [endDate, setEndDate] = useState(new Date("2023/08/2"));

  return (
    <>
        <Grid item xs={3} className="tohide">
        <SearchDest></SearchDest>
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
        
        <Link to="/findreserve">
            <Button
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