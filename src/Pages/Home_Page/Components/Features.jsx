import React from "react";
import { useState, useEffect } from 'react';
import "../Stylesheets/Features.css";
import {Link} from "react-router-dom";

const Features = () => {

  const [hotels, setHotels] = useState([]);

  const apiURL = 'https://hotelapi.loyalty.dev/api/hotels?destination_id=RsBU';

  function getHotels() {
    return fetch(apiURL)
    .then(data => data.json())
  }

  useEffect(() => {
    getHotels().then(hotels => {
      setHotels(hotels);
    });
  },[]);

  // useEffect(() => {
  //   // Fetch data from the API
  //   fetch(apiURL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Set the hotels state with the fetched data
  //       setHotels(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);ß

  console.log("HOTELS FETCHED",hotels);

  return (
    <div className="featured">
      {hotels.map((hotel, index) => (
        <div key={index} className="featuredItem">
          <img
          src={hotel.imgix_url + hotel.image_details.prefix + hotel.image_details.default_image_index + hotel.image_details.suffix}
          alt={hotel.name}
          className="featuredImg"
        />
          {/* RESERVE NOW BUTTON */}
          <div className="middle">
            <Link to="/findreserve">
              <button className="buttontext">Reserve Now</button>
            </Link>
          </div>
          {/* TITLE */}
          <div className="featuredTitles">
            <h2>{hotel.name}</h2> {/* Replace 'name' with the key for the hotel name in your API response */}
          </div>
        </div>
      ))}
    </div>
  );
};

  // return (
  //   <div className="featured">
  //       <div className="featuredItem">


  //           <img
  //           src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/7/E/A/%7B7EA00B0A-0F15-404E-A0C5-D302374BD781%7D1.png?width=750&height=752&mode=crop&quality=100&scale=both" alt=""
  //           className="featuredImg"
  //           />
  //           {/* RESERVE NOW BUTTON */}
  //           <div className="middle">
  //             <Link to='/findreserve'>
  //             <button className="buttontext">Reserve Now</button>
  //             </Link>
  //           </div>
  //           {/* TITLE */}
  //           <div className="featuredTitles"><h2>Shangri-La</h2></div>
  //       </div>    


  //       <div className="featuredItem">
  //           <img
  //           src="https://www.swissotel.com/assets/0/92/2119/3396/3435/3437/6442451793/9fa3daf9-5d46-4ab5-8147-bf0e17956fd4.jpg" alt=""
  //           className="featuredImg"
  //           />
  //           {/* RESERVE NOW BUTTON */}
  //           <div className="middle">
  //             <Link to='/findreserve'>
  //             <button className="buttontext">Reserve Now</button>
  //             </Link>
  //           </div>
  //           {/* TITLE */}
  //           <div className="featuredTitles"><h2>Swissotel</h2></div>
  //       </div>


  //       <div className="featuredItem">
  //           <img
  //           src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/21441842.jpg?k=fd0b1fef1617b2b80bf3a35f75feff54d38f034c81851542eeb1ad8026ccb9b9&o=&hp=1" alt=""
  //           className="featuredImg"
  //           />
  //           {/* RESERVE NOW BUTTON */}
  //           <div className="middle">
  //             <Link to='/findreserve'>
  //             <button className="buttontext">Reserve Now</button>
  //             </Link>
  //           </div>
  //           {/* TITLE */}
  //           <div className="featuredTitles"><h2>PARKROYAL</h2></div>
  //     </div>
  //   </div>
  // );
// };

export default Features;
