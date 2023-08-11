import React, { useEffect, useState } from 'react'
import "./Stylesheets/Results.css";
import { Link, useNavigate } from "react-router-dom";
  
function Results() {
 
  // Retrieve inputs directly from LowerGrid.jsx
  let [dest_id, no_guests, no_rooms] = [window.inputsGlobal.dest_id, window.inputsGlobal.guests.toString(), window.inputsGlobal.rooms.toString()]
  console.log(dest_id, no_guests, no_rooms);

  // Define the React Router navigate function
  const navigate = useNavigate();

  const [retryAttempt, setRetryAttempt] = useState(0);
  const [hotelsDataList, setHotelsData] = useState([])
  const [isLoading, setLoading] = useState(true);

  // Function to fetch data from the API
  const fetchData = () => {
    const cacheBuster = Date.now(); // Generate a random value based on the current timestamp
    fetch(`http://localhost:8000/api?cache=${cacheBuster}`)
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
  

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="results-page">
        <div className='num-results'>
          Fetching data... 
        </div>
      </div>
    )
  }

  let hotelsData = hotelsDataList?.hotels;
  let startD = hotelsDataList?.startdate;
  let endD = hotelsDataList?.enddate;

    /* Retry block */
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const handleTryAgain = () => {
      // Increment the retry attempt count
      setRetryAttempt(retryAttempt + 1);
    
      // Trigger the same logic as pressing the "Find rooms" button
      setInputs({
        "dest_id": window.inputsGlobal.dest_id,
        "check_in": window.inputsGlobal.check_in,
        "check_out": window.inputsGlobal.check_out,
        "rooms": window.inputsGlobal.rooms,
        "guests": window.inputsGlobal.guests
      });
    };

    function setInputs(input) {
      if (input["dest_id"] == "" || input["check_in"] == "" || input["check_out"] == "" || input["rooms"] == "" || input["guests"] == "") {alert("Please fill all fields with valid inputs");
      } else {
          navigate('/loading');
          fetch('http://localhost:8000/input', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input),
        })
          .then(() => {
              const pollStatus = () => {
                  fetch('http://localhost:8000/status')
                      .then((response) => response.json())
                      .then((data) => {
                          if (!data.isProcessing) {
                            navigate('/results');
                          } else {
                              setTimeout(pollStatus, 2000); // Poll every 2s
                          }
                      })
                      .catch((error) => {
                          console.error('Error checking processing status:', error);
                      });
              };
              pollStatus(); // Start polling
          })
          .catch((error) => {
              console.error('Error occurred during fetch /input:', error);
          });
      }
  }

    if (hotelsData.length === 0) {
      if (retryAttempt < 3) {
        return (
          <div className='is-loading'>
            Your results seem to be taking a while to load.
            <button className='try-again-button' onClick={handleTryAgain}>
              Try Again?
            </button>
          </div>
        );
      } else {
        return (
          <div className='is-loading'>
            No results found
          </div>
        );
      }
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Handle button click and navigate to the /hotels route with hotel_id parameter
  const handleBookNow = (hotel_id) => {
    navigate(`/hotels/${hotel_id}/${startD}/${endD}/${no_guests}/${no_rooms}`);
    // navigate(`/hotels/${hotel_id}/${startD}/${endD}`);
  };

  // Set default grey image for faulty image urls
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