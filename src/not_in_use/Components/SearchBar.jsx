import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import React, { useState, useEffect} from "react";
import destinations from "../destinations.json"
import "../Stylesheets/SearchBar.css"

function SearchBar({handleSearch, input}) {


    const handleChange = (value) => {
      handleSearch(value);
    };


    return(
        <>
        <div className="input-wrapper">
          <input
            className="dest-input"
            placeholder = "Where do you want to go?"
            value = {input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        </>
    )
}

export default SearchBar
