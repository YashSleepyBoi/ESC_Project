import React from 'react';
import Summary from "./BookingSummary";
import "../Stylesheets/Success.css";
import Footer from "../../Room_Page/Components/RoomFooter";

const Success = () => {
    return(
        <div className='success-wrapper'>
            <p className='header-title'>Thank you for booking with us!</p>
            <div className='book-summ'><Summary/></div>
            <div className='success-footer'><Footer/></div>
        </div>
    )
};

export default Success;
