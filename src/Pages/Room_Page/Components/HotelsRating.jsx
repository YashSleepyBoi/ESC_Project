

import "../Stylesheets/Venue.css"
function HotelRating(props) {
    return (
        <div className="venue_view">
            <div>
                <h1>{props.name}</h1>
                <p>Score:{props.score}</p>
                <p>Popularity: {Math.ceil(props.popularity)}</p>
            </div>
            <div>
                <img src="https://cache.marriott.com/content/dam/marriott-renditions/SINJW/sinjw-room-4402-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1846px:*" alt="" />
            </div>
        </div>
    )
}

export default HotelRating