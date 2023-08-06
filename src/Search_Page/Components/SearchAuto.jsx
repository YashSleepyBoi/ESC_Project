//import { ReactSearchAutocomplete } from "react-search-autocomplete";
import destinations from "../destinations.json";
import { FaSearch } from "react-icons/fa";

// const destinationsArray = JSON.parse(destinations);


function SearchAuto() {

  const {input, setInput} = useState("");
    
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

    const handleOnSearch = (string, results) => {
            console.log(string, results);
          };
        
    const handleOnHover = (result) => {
            console.log(result);
          };
        
    const handleOnSelect = (item) => {
            console.log(item);
          };
        
    const handleOnFocus = () => {
            console.log("Focused");
          };
        
    const handleOnClear = () => {
            console.log("Cleared");
          };

return (
  <>
  <div className="input-wrapper">
    <FaSearch id="search-icon"/>
    <input
      placeholder="Where do you want to go?"
      value = {input}
      onChange = {(e) => setInput(e.target.value)}
      />


  </div>
      {/* <ReactSearchAutocomplete
      items={items}
      fuseOptions={{ keys: ["country"] }} // Search on both fields
      resultStringKeyName="country" // String to display in the results
      onSearch={handleOnSearch}
      onHover={handleOnHover}
      onSelect={handleOnSelect}
      onFocus={handleOnFocus}
      onClear={handleOnClear}
      showIcon={false}
      placeholder = {"Where do you want to go?"}
      styling={{
        height: "34px",
        border: "1px solid darkgreen",
        borderRadius: "4px",
        backgroundColor: "white",
        boxShadow: "none",
        hoverBackgroundColor: "lightgreen",
        color: "darkgreen",
        fontSize: "12px",
        iconColor: "green",
        lineColor: "lightgreen",
        placeholderColor: "darkgreen",
        clearIconMargin: "3px 8px 0 0",
        zIndex: 2,
      }}
      /> */}
    
    </>

    );
}
  
export default SearchAuto;
      