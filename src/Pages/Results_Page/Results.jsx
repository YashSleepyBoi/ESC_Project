import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import "./Stylesheets/Results.css";
import { data } from 'autoprefixer';
import { Button, Divider, useMediaQuery } from "@mui/material";
import { reserveButtonStyle } from '../Room_Page/Content';
import NavBot from '../Room_Page/Components/NavBot1';
import { Link, useNavigate } from "react-router-dom";
  
function Results() {
 
  // Retrieve inputs directly from LowerGrid.jsx
  let [no_guests, no_rooms] = [window.inputsGlobal.guests.toString(), window.inputsGlobal.rooms.toString()]
  console.log(no_guests, no_rooms);

  // const [retryAttempt, setRetryAttempt] = useState(0);

  // Store results fetched from /api
  const [hotelsDataList, setHotelsData] = useState([])
  // Ensure hotel data is fetched before displaying
  const [isLoading, setLoading] = useState(true);

  // Function to fetch data from the API
  const fetchData = () => {
    // setLoading(true);
    const cacheBuster = Date.now(); // Generate a random value based on the current timestamp
    fetch(`http://localhost:8000/api?cache=${cacheBuster}`) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        if (data && data.hotels) {
        setHotelsData(data);
      } else {
        setHotelsData([]);
      }
      setLoading(false);
    })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Retry after a delay
      });
  };

  // // Retry fetching data
  // const retryFetchData = () => {
  //   fetchData();
  //   setLoading(true); // Set loading state while retrying
  // };

  useEffect(() => {
    fetchData();
    // Set up regular polling
    // const pollingInterval = setInterval(() => {
    //   fetchData();
    // }, 5000); // Poll every 5 seconds (adjust the interval as per your requirement)
    // // Clean up the interval when the component is unmounted to avoid memory leaks
    // return () => clearInterval(pollingInterval);
  }, []);
 
  // Define the React Router navigate function
  const navigate = useNavigate();

    if (isLoading) {
      return (
        <div className="results-page">
          <div className='is-loading'>
            Fetching data... 
          </div>
        </div>
      )
      }

    let hotelsData = hotelsDataList?.hotels;
    let startD = hotelsDataList?.startdate;
    let endD = hotelsDataList?.enddate;

    console.log("RESULTS.JSX: DATA SHOULD SHOW", hotelsData);

    // 3 attempts to fetch data
    if (hotelsData.length === 0) {
      // If data is not available and retryAttempt is less than 2
      // if (retryAttempt < 3) {
      //   retryFetchData();
      //   return (
      //     <div className='is-loading'>
      //       Attempting fetch again...
      //     </div>
      //   );
      // } else {
        return (
          <div className='is-loading'>
            No results found
          </div>
        );
    }

    // if (hotelsData.length === 0) {
    //   // If data is still not available, display "No results found"
    //   return (
    //     <div className='is-loading'>
    //       No results found
    //     </div>
    //   );
    // }

    // Handle button click and navigate to the /hotels route with hotel_id parameter
    const handleBookNow = (hotel_id) => {
      navigate(`/hotels/${hotel_id}/${startD}/${endD}/${no_guests}/${no_rooms}`);
      // navigate(`/hotels/${hotel_id}/${startD}/${endD}`);
    };

    const defaultImageUrl = 'https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png'
    const handleImageError = (event) => {
      event.target.src = defaultImageUrl;
    };

 
  // Display
  return (

    <div className="results-page">

      <div className='num-results'>
      {hotelsData.length} hotels found
      <p>prices incl. of taxes and fees</p>
      </div>

      {hotelsData.map((hotel, index) => (
        <div key={index} className="hotel-container">

          <div className='hotel-image-container'>
          <Link to={`/hotels/${hotel.id}/${startD}/${endD}/${no_guests}/${no_rooms}`}>
            <img className="hotel-image" 
            src={hotel.image_details.prefix+hotel.default_image_index+hotel.image_details.suffix} 
            onError={handleImageError} />
          </Link>
          </div>

          
          <div className="hotel-details">
          <Link to={`/hotels/${hotel.id}/${startD}/${endD}/${no_guests}/${no_rooms}`}>
            <div className="hotel-title">{hotel.name}</div>
          </Link>
            <div className="hotel-features">{hotel.address}</div>
            <div className="hotel-distance">{Math.round(hotel.distance / 100) / 10} km from Airport</div>
            {hotel.rating ? (
              <div className="siRating">
                <div className="rating-num">{hotel.rating}/5</div>
                <div className="ratings-bar">
                  <div className="ratings-bar-filled" style={{ width: `${(hotel.rating / 5) * 100}%` }}></div>
                </div>
              </div>
            ) : (
              <div className="no-rating-message">No ratings yet</div>
            )}
          </div>

          <div className='price-column'>
            <div className='sg-d'>SGD</div>
            <div className="hotel-price">
            {Math.round(hotel.lowest_converted_price)}
            </div>
            <div className='onwards'>onwards</div>
            {/* Linking to hotel page with inputs as params */}
            {/* <Link to={`/hotels/${hotel.id}/${startD}/${endD}`}> */}
            <Link to={`/hotels/${hotel.id}/${startD}/${endD}/${no_guests}/${no_rooms}`}>
              <button type="submit" id={hotel[index]} className="book-button" 
              onClick={() => handleBookNow(hotel.id)}>BOOK NOW</button>
              </Link>
          </div>
 
        </div>
      ))}
    </div>
  )
}
    
 
export default Results;