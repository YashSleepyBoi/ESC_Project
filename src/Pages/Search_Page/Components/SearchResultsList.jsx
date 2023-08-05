import React from 'react'
// import SearchResult from "./SearchResult"
import "../Stylesheets/SearchResultsList.css";
import "../Stylesheets/SearchResult.css";

function SearchResultsList ({results, clickHandler}) {

  return (
    <div className="results-list">
      {results.slice(0, 5).map((result, id) => {
        return <div className="search-result"
        key={id}
        onClick={()=>clickHandler(result)}
        style={{color: 'orange'}}>
          {result.country}
        </div>;
      })}
    </div>
  );
}

export default SearchResultsList