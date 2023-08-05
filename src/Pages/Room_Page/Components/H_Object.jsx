import { useState } from "react";
import "../Stylesheets/H_Object.css"

function H_Object({item}) {
    const [state, setstate] = useState(false);
    const displayHandler = () => {
      console.log("clicked");
      if (state) { setstate(false) }
      else { setstate(true) }
      
  }
    return (
        <p className="amenities-text" id="hover_p" onClick={displayHandler} >
            {item.name}{state ?
                    
            <span>: {item.score}/100</span> : <></>
        }</p>
    )
    
}

export default H_Object;