


// Import Statements
import React from 'react';



import "./Stylesheets/Room.css"

// import Banner from './Components/Banner';
import ImageGrid from "./Components/ImageGrid";
import Hotel_Rooms from './Components/Hotel_Rooms';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
function Room_Reserve({setBottom}) {
    setBottom(false);
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("lg"));
    const obj = {
        r_name: "Premier Courtyard Room King",
        r_id: "e21424563563",
        r_cost: "4000",
        r_start_d: "dd/mm/yyyy",
        r_end_d: "dd/mm/yyyy",
        url:"https://i.travelapi.com/lodging/1000000/900000/893000/892940/0c4c3ec8_z.jpg"
    }
    return (
        
        <div style={{ background: "#fbfbfb" ,width:"100%"}}>
           
         {/* TODO 1.9 : FIX THE ROUTER USING A PROPER REACT ROUTER */}
          
{/*         
            <Banner></Banner> */}
            
            <h1 style={{ fontSize:"2rem", position:"relative",top:"8rem"}}> Selected Room</h1>
            <div className='hotel_rooms_holder' style={{ height: "20rem", display:"flex" , position:"relative",top:"10rem", flexDirection:"column" ,alignItems:"center", justifyContent:"center"}}>
                <Hotel_Rooms img={obj.url} r_name={obj.r_name} price={obj.r_cost} obj={obj}></Hotel_Rooms>
                
            {/* fbfbfb */}
            </div>
            
            <h1 style={{ fontSize:"2rem", margin:"2%",marginTop:"10%",position:"relative"}}>Other Rooms</h1>

            <div className="room-grid">
            <ImageGrid isSmall={isSmall} />
            </div>



     
        
        
        </div>
    )
}

export default Room_Reserve