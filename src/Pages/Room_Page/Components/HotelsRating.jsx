

import "../Stylesheets/Venue.css"
function HotelRating(props) {
    const a=props.img.length
    const v=Math.floor(Math.random() * 10)
    return (
        <div className="venue_view">
            <div>
                <h1>{props.name}</h1>
                <p>Score:{props.score}</p>
                <p>Popularity: {Math.ceil(props.popularity)}</p>
            </div>
            <div>
                <img src={props.img[v]} alt="" />
            </div>
        </div>
    )
}

export default HotelRating