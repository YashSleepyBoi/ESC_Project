


// Import Statements
import React from 'react';



import "./Stylesheets/Room.css"

// import Banner from './Components/Banner';

import Hotel_Rooms from './Components/Hotel_Rooms';

function Room_Reserve() {

    

    return (
        
        <div style={{ background: "#fbfbfb" ,width:"100%"}}>
           
         {/* TODO 1.9 : FIX THE ROUTER USING A PROPER REACT ROUTER */}
          
{/*         
            <Banner></Banner> */}
            
            <h1> Selected Room</h1>
            <div className='hotel_rooms_holder' style={{ height: "20rem", display:"flex" , flexDirection:"column" ,alignItems:"center", justifyContent:"center"}}>
                <Hotel_Rooms img="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" r_name="Room" price="2000 EUR/night"></Hotel_Rooms>
                
            {/* fbfbfb */}
            </div>
            <div className='hotel_rooms_holder' style={{ height: "20rem", display:"flex" , flexDirection:"column" ,alignItems:"center", justifyContent:"center"}}>
                <Hotel_Rooms img="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" r_name="Room2" price="2000 EUR/night"></Hotel_Rooms>
                
            {/* fbfbfb */}
            </div>
            <h1>Other Rooms</h1>
  



     
        
        
        </div>
    )
}

export default Room_Reserve