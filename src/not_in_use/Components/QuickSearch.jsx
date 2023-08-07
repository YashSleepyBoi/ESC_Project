{/* <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script> */}
import styled from "styled-components";
import DateRange from '@mui/icons-material/DateRange'
import DatePPicker from "./DatePicker.jsx"
import "../Stylesheets/QuickSearch.css"
import "./DatePicker.jsx"
import "./SearchAuto.jsx"

function QuickSearch() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }
    return (
        // outer container
        // <div className=" flex justify-center relative bg-black" style={{width:'100%'}}>
        <div class="sticky top-0 p-6 max-w-full mx-auto bg-black rounded-3xl shadow-lg" style={{ width: '80%'}}> 
            {/* inner container using grid */}

                <div class='grid-container' style={{ width: '100%' }}>
                    <form onSubmit={handleSubmit}>
                        {/* 
                        <input type="text" id="fname" name="fname"></input>
                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname"></input> */}
                        <div class="flex items-center justify-center">
                        <div class="grid-item">
                            <i class="material-icons">place</i>
                            <label for="destination" > DESTINATION:</label>
                            <SearchAuto></SearchAuto>
                        </div>

                        <div class="grid-item align">
                        <DateRange></DateRange>
                            <label for="stayDuration"> 1 NIGHT </label>
                            <DatePPicker></DatePPicker>
                            <div className="flex-column justify-start items-start">
                            </div>
                        </div>
                        <div class="grid-item">
                        <button class="button" variant="contained" type = 'submit' onClick="handleSubmit()">Find Hotels</button>
                        </div>
                        </div>
                    </form>
            </div>
            </div>
            // </div>
        
    )
}

export default QuickSearch

