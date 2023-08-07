import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import "./Stylesheets/Results.css";
import { data } from 'autoprefixer';
import { Button, Divider, useMediaQuery } from "@mui/material";
import { reserveButtonStyle } from '../Room_Page/Content';
import NavBot from '../Room_Page/Components/NavBot1';
import { Link, useNavigate } from "react-router-dom";
 
function Results() {
 
  const [hotelsDataList, setHotelsData] = useState([])
  // Ensure hotel data is fetched before displaying
  const [isLoading, setLoading] = useState(true);
 
  async function getHotels() {
    setLoading(true);
    const data = await fetch('http://localhost:8000/api');
    return await data.json();
  }
 
  useEffect(() => {
    getHotels()
      .then((hotels) => {
        setHotelsData(hotels);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
 
  // Define the React Router navigate function
  const navigate = useNavigate();
 
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
    }
 
    let hotelsData = hotelsDataList?.hotels;
    let startD = hotelsDataList?.startdate;
    let endD = hotelsDataList?.enddate;
    console.log("RESULTS.JSX: DATA SHOULD SHOW", hotelsData);

      // Handle button click and navigate to the /hotels route with hotel_id parameter
    const handleBookNow = (hotel_id) => {
      navigate(`/hotels/${hotel_id}/${startD}/${endD}`);
    };
  
 
    // if ((hotelsData.length)==0) {
    //   return (
    //     <div>
    //     <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    //     <p>No hotels found</p>
    //     </div>
    //   );
    // }
 
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
            <img src={hotel.image_details.prefix+hotel.default_image_index+hotel.image_details.suffix}/>
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
 
            {/* Linking to hotel page */}
            <Link to={`/hotels/${hotel.id}/${startD}/${endD}`}>
            {/* <Link to={`/hotels`}> */}
            <button type="submit" id={hotel[index]} className="book-button" onClick={() => handleBookNow(hotel.id)}>Book Now</button>
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
}
    
 
export default Results;