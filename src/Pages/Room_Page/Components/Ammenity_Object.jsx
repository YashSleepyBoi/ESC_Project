function Ammenity_Object(props) {
    const obj = {
        "airConditioning": "Air Conditioning",
        "businessCenter":"Business Center",
        "clothingIron": "Clothing Iron",
        "dataPorts": "Data Ports",
        "dryCleaning": "Dry Cleaning",
        "hairDryer": "Hair Dryer",
        "meetingRooms": "Meeting Rooms",
        "outdoorPool": "Outdoor Pool",
        "parkingGarage": "Parking Garage",
        "roomService": "Room Service",
        "safe": "safe",
        "tVInRoom": "TV Available",
        "voiceMail": "Voice Mail"
    }
    return (
        <div className="flex">
            <img src="https://img.icons8.com/?size=512&id=611&format=png" style={{width:20}}></img>
            {/* TODO 1.7 FILL IN THE AMMENTITIES */}
            <h3> {obj[props.name]}</h3>
        </div>
    )
}

export default Ammenity_Object