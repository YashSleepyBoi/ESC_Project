import React from "react";
import { useState, useEffect } from 'react';
import "../Stylesheets/Features.css";
import {Link} from "react-router-dom";



const Features = () => {

    
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    // Fetch hotels data from the backend API
    fetch('http://localhost:8000/features')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch features data');
        }
        return response.json();
      })
      .then((data) => {
        // Set the retrieved data to the state
        setFeatures(data);
        console.log("Fetched features at features.jsx:",data);
      })
      .catch((error) => {
        console.error('Error fetching features data:', error);
      });
  }, []);

  //Filter hotels with rating of 5.0
  const featuresWithRating5 = features.filter((feature) => feature.rating === 5.0);
  const featuresToDisplay = featuresWithRating5.slice(0, 30);

  return (
    <div className="featured">
      {featuresToDisplay.map((feature, index) => (


        <div key= {index} className="featuredItem">
          
          <img
          src = {feature.image_details.prefix+feature.default_image_index+feature.image_details.suffix}
          // src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/7/E/A/%7B7EA00B0A-0F15-404E-A0C5-D302374BD781%7D1.png?width=750&height=752&mode=crop&quality=100&scale=both" alt=""
          className="featuredImg"
          />
          {/* RESERVE NOW BUTTON */}
          <div className="middle">
            <Link to='/findreserve'>
            <button className="buttontext">Reserve Now</button>
            </Link>
          </div>
          {/* TITLE */}
          <div className="featuredTitles"><h2>{feature.name}</h2></div>
      </div>    

      ))}
        

      
    </div>
  );
};

export default Features;

