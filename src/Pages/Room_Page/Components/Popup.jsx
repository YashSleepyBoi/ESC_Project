import React from "react";
import "../Stylesheets/Popup.css";


export default function Popup({ body, closePopup }) {
    return (
      <div className="popup-container">
       <div className="popup-body">
        {body}
        <button className="closebutton" onClick={closePopup}>Close X</button>
       </div>
      </div>
    );
  };