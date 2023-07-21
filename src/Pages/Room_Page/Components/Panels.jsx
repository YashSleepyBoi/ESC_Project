import DatePicker from 'react-datepicker'
import { useState } from 'react';
import "../Stylesheets/Panel.css"

function Panel() {
    const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };
    return (
        <>
            <div className='panel'>
                <div className="dates">
                    <div className="resultholder" >
                        <h5>Dates</h5>
                        <DatePicker
                            wrapperClassName='date_picker'
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
    />
                    </div>
                </div>
                <div className="room_guest">
                    <div className="resultholder" >
                        <h5>Rooms and Guests</h5>
                        <p> 1 Room; 1 Adult </p>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Panel