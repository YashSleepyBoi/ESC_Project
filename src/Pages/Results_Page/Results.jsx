import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./Stylesheets/Results.css";
import { data } from 'autoprefixer';
import { Button, Divider, useMediaQuery } from "@mui/material";
import { reserveButtonStyle } from '../Room_Page/Content';


function Results() {

  const [hotelsDataList, setHotelsData] = useState({hotels:[]})
  // Ensure hotel data is fetched before displaying
  const [isLoading, setLoading] = useState(true);

  function getHotels() {
    // needs access control
    return fetch('http://localhost:8000/api')
      .then(data => 
        data.json()
        )
  }

  useEffect(() => {
    getHotels().then(
      hotels => {
      setHotelsData(hotels);
      setLoading(false);
    });
  },[]);

  // // Change to retrieve hotel id
  // function pushHotelId(id) {
  //   alert("hotel id:"+id);
  // }

  if (isLoading) {
    return (
      <div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <p>Loading results...</p>
      </div>
    )
  
    } else {

      let hotelsData = hotelsDataList.hotels;
      console.log("DATA SHOULD SHOW", hotelsData, hotelsData.length);

    if ((hotelsData.length)===0) {
      return (
      <div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <p>No hotels found</p>
      </div>
      );
    } else {

  // Display
  return (
    <div className="results">
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      {hotelsData.length} hotels found
      <p>prices incl. of taxes and fees</p>
      <br></br>
      {hotelsData.map((hotel, index) => (

        // RETURNS 
        <div key={index} className="hotel-container">
          <div>
          {/* prefix + number + suffix */}
            {/* <img alt="cat" className="hotel-image" img src="https://media.cnn.com/api/v1/images/stellar/prod/180222154237-soboutique-sobed-hotel-bedding-set-so-1210-s-xlrg.jpg?q=w_1599,h_900,x_0,y_0,c_fill/w_1280"/> */}
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
  )
}}
}
    

export default Results;