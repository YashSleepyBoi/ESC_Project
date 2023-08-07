import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import "./Stylesheets/Results.css";
import { data } from 'autoprefixer';
import { Button, Divider, useMediaQuery } from "@mui/material";
import { reserveButtonStyle } from '../Room_Page/Content';
import NavBot from '../Room_Page/Components/NavBot1';
import { Link, useNavigate } from "react-router-dom";
 
function Results() {
 
  const [hasData, setHasData] = useState(true);
  const [hotelsDataList, setHotelsData] = useState([])
  // Ensure hotel data is fetched before displaying
  const [isLoading, setLoading] = useState(true);

  // Function to fetch data from the API
  const fetchData = () => {
    const cacheBuster = Date.now(); // Generate a random value based on the current timestamp

    fetch(`http://localhost:8000/api?cache=${cacheBuster}`) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setHotelsData(data);
        setLoading(false);
        setHasData(data.hotels.length > 0);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Retry after a delay
      });
  };

  useEffect(() => {
    fetchData();
    // Set up regular polling
    const pollingInterval = setInterval(() => {
      fetchData();
    }, 5000); // Poll every 5 seconds (adjust the interval as per your requirement)

    // Clean up the interval when the component is unmounted to avoid memory leaks
    return () => clearInterval(pollingInterval);
  }, []);
 
  // Define the React Router navigate function
  const navigate = useNavigate();
 
    if (isLoading) {
    return (
      <div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <p>Loading results...</p>
      </div>
    )
    }

    // Check if there are any hotels in the result
    if (!hasData) {
      return (
        <div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          No results found
        </div>
      );
    }

    let hotelsData = hotelsDataList?.hotels;
    let startD = hotelsDataList?.startdate;
    let endD = hotelsDataList?.enddate;
    let guests = hotelsDataList?.numguests.toString();
    console.log("RESULTS.JSX: DATA SHOULD SHOW", hotelsData);

    if (hotelsData.length==0){
      return (
        <div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        No results found</div>
      )
    }

      // Handle button click and navigate to the /hotels route with hotel_id parameter
    const handleBookNow = (hotel_id) => {
      navigate(`/hotels/${hotel_id}/${startD}/${endD}/${guests}`);
    };

 
  // Display
  return (
    <div className="results">
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      {hotelsData.length} hotels found
      <p>prices incl. of taxes and fees</p>
      <br></br>
      {hotelsData.map((hotel, index) => (
 
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
 
            {/* Linking to hotel page with inputs as params */}
            <Link to={`/hotels/${hotel.id}/${startD}/${endD}`}>
            <button type="submit" id={hotel[index]} className="book-button" onClick={() => handleBookNow(hotel.id)}>Book Now</button>
            </Link>
 
            <script>
            </script>
            {/* </Link> */}
          </div>
 
        </div>
      ))}
    </div>
  )
}
    
 
export default Results;