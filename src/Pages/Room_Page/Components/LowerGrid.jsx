import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import Grid from '@mui/material/Grid';

import SearchDest from "../../Search_Page/Components/SearchDest"
import DatePPicker from "../../Search_Page/Components/DatePicker";

import Counter from "../../Search_Page/Components/Counter"

import { Button, Divider, useMediaQuery } from "@mui/material";
import { reserveButtonStyle } from "../Content";

// Accessed from results.jsx
function setInputsToGlobal(inputs) {
  let input = JSON.parse(JSON.stringify(inputs));
  window.inputsGlobal = input;
}
console.log("LOWERGRID.JSX SETS", console.log("LOWERGRID.JSX SETS", window.inputsGlobal))
export default function LowerGrid({room,pax, setRoom, setPax, startDate, setEndDate, endDate, setStartDate, dest, clickHandler}) {

    const isSmall = useMediaQuery('(max-width:700px)')
    const navigate = useNavigate();

    // Clear previous set of data before inputs are posted to /input
    const [isFetching, setIsFetching] = useState(false);

    function setInputs(input) {
      if (input["dest_id"] == "" 
      || input["check_in"] == "" 
      || input["check_out"] == "" 
      || input["rooms"] == "" 
      || input["guests"] == "") {
          alert("Please fill all fields with valid inputs");
      } else {
          navigate('/loading');
          // Clear data in /api by sending a POST request
          try {
              fetch('http://localhost:8000/clear', {
                  method: 'POST',
                  mode: 'cors',
                  headers: {
                      'Content-Type': 'application/json',
                  },
              });
              console.log('Data cleared in /api');
          } catch (error) {
              console.error('Error clearing data:', error);
          }
  
          // Wait for data to be cleared, then post new inputs
          setInputsToGlobal(input);
          fetch('http://localhost:8000/input', {
              method: 'POST',
              mode: 'cors',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(input),
          })
              .then(() => {
                  const pollStatus = () => {
                      fetch('http://localhost:8000/status')
                          .then((response) => response.json())
                          .then((data) => {
                              if (!data.isProcessing) {
                                  navigate('/results');
                              } else {
                                  setTimeout(pollStatus, 2000); // Poll every 2s
                              }
                          })
                          .catch((error) => {
                              console.error('Error checking processing status:', error);
                          });
                  };
                  pollStatus(); // Start polling
              })
              .catch((error) => {
                  console.error('Error occurred during fetch /input:', error);
              });
      }
  }
  

    // function setInputs(input) { 
    //   if (input["dest_id"]=="" 
    //   || input["check_in"]=="" 
    //   || input["check_out"]=="" 
    //   || input["rooms"]=="" 
    //   || input["guests"]=="")
    //   {alert("Please fill in all fields");}
  
    //   else {

    //     const pollStatus = () => {
    //       fetch('http://localhost:8000/status')
    //           .then((response) => response.json())
    //           .then((data) => {
    //               if (!data.isProcessing) {
    //                   navigate('/results');
    //               } else {
    //                   setTimeout(pollStatus, 1000); // Poll every 1 second
    //               }
    //           })
    //           .catch((error) => {
    //               console.error('Error checking processing status:', error);
    //           });
    //   };
      
    //   setInputsToGlobal(input);
    //   fetch('http://localhost:8000/input', {
    //       method: 'POST',
    //       mode: 'cors',
    //       headers: {
    //           'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(input)
    //   })
    //   .then(() => {
    //       pollStatus(); // Start polling
    //   })
    //   .catch((error) => {
    //       console.error('Error occurred during fetch /input:', error);
    //   });
      

    // }
    //   }


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
        
        {/* <Link to="/loading"> */}
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
          {/* </Link> */}

        </Grid>
    </>
  )
}