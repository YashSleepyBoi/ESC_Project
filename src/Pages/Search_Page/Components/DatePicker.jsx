import React, { useState } from "react";
import DatePicker from "react-datepicker"

import "../Stylesheets/DatePicker.css"

import "react-datepicker/dist/react-datepicker.css";


function DatePPicker({startDate, endDate, setStartDate, setEndDate}){

    return(
        <div>
            <DatePicker 
                wrapperClassName="datepicker"
                selected={startDate}
                onChange={
                    (date) => setStartDate(date)
                }
                selectsStart
                startDate={startDate}
                endDate={endDate}
                />
            <DatePicker 
                wrapperClassName="datepicker2"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                />
        </div>
    )
}

export default DatePPicker