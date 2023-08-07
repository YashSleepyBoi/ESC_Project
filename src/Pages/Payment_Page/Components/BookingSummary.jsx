import React from 'react';
import { useState, useEffect } from 'react';
import "../Stylesheets/BookingSummary.css";
import {db} from "../../../firebase";
import { getAuth } from "firebase/auth";
import { doc, collection, query, orderBy, limit, getDocs } from "firebase/firestore";

const BookingSummary = () => {
  const [bookingDetails, setBookingDetails] = useState({
    hotelName: '',
    checkInDate: '',
    checkOutDate: '',
    numAdults: 0,
    numChildren: 0,
    numRooms: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    // Fetch the user's latest booking ID from Firestore
    async function fetchLatestBookingId() {
      const auth = getAuth();
      const userId = auth.currentUser.uid;
      const bookingsRef = collection(db, 'Users', userId, 'booking');
      const bookingQuery = query(bookingsRef, orderBy('booking.index', 'desc'), limit(1));

      try {
        const querySnapshot = await getDocs(bookingsRef);
        const bookings = [];
        
        querySnapshot.forEach((doc) => {
          const booking = doc.data().booking;
          bookings.push(booking);
        });
  
        // Sort the bookings array based on your index field (assuming the index is a number)
        bookings.sort((a, b) => b.index - a.index);
  
        if (bookings.length > 0) {
          const latestBooking = bookings[0];
          const bookingId = latestBooking.r_id;
          fetchBookingDetails(bookingId);
        } else {
          console.log('No bookings found for the user.');
        }
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    }

    // Fetch the booking details based on the retrieved booking ID
    async function fetchBookingDetails(bookingId) {
      const bookingDocRef = doc(db, 'booking', bookingId);

      try {
        const docSnapshot = await getDocs(bookingDocRef);
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setBookingDetails({
            hotelName: data.r_name,
            checkInDate: data.r_start_d,
            checkOutDate: data.r_end_d,
            numGuests: data.r_num_guests,
            numRooms: data.r_num_rooms,
            totalPrice: parseFloat(data.r_cost),
          });
        } else {
          console.log('Booking not found.');
        }
      } catch (error) {
        console.error('Error fetching booking details:', error);
      }
    }

    fetchLatestBookingId();
  }, []);
  
  return (
    <div className="summary">
      <p className="card-title">BOOKING SUMMARY</p>
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
        <span>Number of Guests:</span>
        <span>{bookingDetails.numGuests}</span>
      </div>
      <div className="SummaryItem">
        <span>Number of Rooms:</span>
        <span>{bookingDetails.numRooms}</span>
      </div>
      <div className="SummaryItem">
        <span>Total Price:</span>
        <span>${bookingDetails.totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};
  
  export default BookingSummary;
