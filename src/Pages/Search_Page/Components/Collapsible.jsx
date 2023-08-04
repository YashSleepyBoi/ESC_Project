import React from 'react'
import { useState } from 'react';
import Counter from "./Counter"
import "../Stylesheets/Collapsible.css"

function Collapsible({room, pax,setRoom ,setPax}) {
    const [open, setOpen] = useState(false);


    const toggle = () => {
        setOpen(!open);
      };


  return (
    <div>
      <div>
        
      </div>
        <button className="room-pax" onClick={toggle}>{room} room {pax} guests</button>
        {open && (
      <div className="toggle">
        <Counter quantity={room} setQuantity={setRoom}></Counter>
        <Counter quantity={pax} setQuantity={setPax}></Counter>
        {/* <Counter count={room} setCount={setRoom}/>
        <Counter count={pax} setCount={setPax}/> */}
      </div>
    )}
    </div>
  )
}

export default Collapsible
