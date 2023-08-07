// DON'T USE
import React from 'react'

import destinations from "../destinations.json"
import {useState} from "react";
import SearchBar from "./SearchBar"
import SearchResultsList from "./SearchResultsList"

function SearchDestNo({setDest}) {

    const [results, setResults] = useState([])
    const [input, setInput] = useState([])

    const items = destinations.map(
        (destination, i) =>(
        {
        id: i,
        uid: destination.uid,
        country: destination.term,
        state: destination.state,
        type: destination.type,
        }
        ));
  
      const fetchData = (value) => {
        const results = items.filter((destination) => {
          return (
            value &&
            destination &&
            destination.country &&
            destination.country.toLowerCase().includes(value)
            )
        })
        console.log(results)
        setResults(results);
      }

    function handleResultClick(result) {
        setInput(result.country); 
        setResults([])
        // setDest(result.uid);
        
      }
    
    const handleSearch = (value) => {
        setInput(value);
        fetchData(value)
        console.log(results)
      };
      
  return (
    <div>
        <SearchBar handleSearch={handleSearch} input={input}/>
        {results &&
        results.length > 0 &&
        <SearchResultsList results={results} clickHandler={handleResultClick} />}
    </div>
  )
}

export default SearchDestNo