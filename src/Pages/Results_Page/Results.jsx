import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./Stylesheets/Results.css";




function Results() {

    /* Fetch data from router */
    const [hotelsData, setBackendData] = useState([])

    useEffect(() => {
      // backend API route
        fetch("/api").then(
            response => response.json()
        ).then(
            hotelsData => {
            setBackendData(hotelsData.hotels) // Hotel objects
            }
        )}, [])
    
    
    console.log(hotelsData);

  // Display
  return (
    <div className="results">
      <p>Showing results...</p>
      <p>{hotelsData.length} hotels found</p>
      <br></br>
      {hotelsData.map((hotel, index) => (

        // RETURNS 
        <div key={index} className="hotel-container">
          <div>
            <img alt="cat" className="hotel-image" img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"/>
            {/* TODO: images don't show! */}
            <img src={hotel.image_details.prefix+hotel.image_details.default_image_index+hotel.image_details.suffix}/>
          </div>

          {/*<div className="hotel-image">{hotel.image_details.count}</div>*/}
          <div className="hotel-details">
            <div className="hotel-title">{hotel.name}</div>
            <div className="hotel-features">{hotel.address}</div>
            <div className="hotel-distance">{Math.round(hotel.distance/100)/10} km from Airport</div>
            {hotel.rating && <div className="siRating">
              {/* put stars */}
            <span></span>
            <div className='hotel-details'>Rating: </div>
            <button>{hotel.rating}</button>
        </div>}
            {/* <div className="hotel-features">Rating: {hotel.rating}/5</div> */}
          </div>

          <div className="hotel-details">
            <br></br>
          <div className='hotel-features'>SGD</div>
          <div className="hotel-title">{Math.round(hotel.lowest_converted_price)}</div>
          <p>onwards</p>

            {/* TODO: Linking to booking page */}
            <Link to="/roomreserve">
            <button type="submit" value={hotel.id} onClick={console.log(this.value)} className="book-button">Book Now</button>
            </Link>

            <script>
              {/* const baseUrl = "http://localhost:8383/id"
              const bookBtn = document.getElementById(hotel.id);
              bookBtn.addEventListener('click', console.log("clicked"))
               */}
            </script>
            {/* </Link> */}
          </div>

        </div>
      ))}
    </div>
  );
}
    

export default Results;