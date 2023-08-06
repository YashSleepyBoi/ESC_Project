import React from 'react';
import "../Stylesheets/Cancel.css";
import Footer from "../../Room_Page/Components/RoomFooter";

const Cancel = () => {
    return(
        <div className='cancel-wrapper'>
            <p className='cancel-msg'>Your booking has been halted! <br/>Please try again to reserve a stay with us.</p>
            <div className='cancel-footer'><Footer/></div>
        </div>
    )
};

export default Cancel;
