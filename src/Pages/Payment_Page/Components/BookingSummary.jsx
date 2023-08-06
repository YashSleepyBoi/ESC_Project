import React from 'react';
import "../Stylesheets/BookingSummary.css"

const BookingSummary = () => {
    // Demo booking details
    const bookingDetails = {
      hotelName: 'Luxury Hotel',
      checkInDate: '2023-08-10',
      checkOutDate: '2023-08-15',
      numAdults: 2,
      numChildren: 1,
      numRooms: 1,
      totalPrice: 1250.00,
    };
  
    return (
      <div className="summary">
        <p className='card-title'>BOOKING SUMMARY</p>
        <div className="SummaryItem">
          <span>Hotel:</span>
          <span>{bookingDetails.hotelName}</span>
        </div>
        <div className="SummaryItem">
          <span>Check-in:</span>
          <span>{bookingDetails.checkInDate}</span>
        </div>
        <div className="SummaryItem">
          <span>Check-out:</span>
          <span>{bookingDetails.checkOutDate}</span>
        </div>
        <div className="SummaryItem">
          <span>Adults:</span>
          <span>{bookingDetails.numAdults}</span>
        </div>
        <div className="SummaryItem">
          <span>Children:</span>
          <span>{bookingDetails.numChildren}</span>
        </div>
        <div className="SummaryItem">
          <span>Total Price:</span>
          <span>${bookingDetails.totalPrice.toFixed(2)}</span>
        </div>
      </div>
    );
  };
  
  export default BookingSummary;
