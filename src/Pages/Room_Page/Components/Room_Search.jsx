import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function RoomSearch() {
  return (
    <>
      <div className="room-search">
        <div className="room-search-title">
          <h1>Find Your Room</h1>
        </div>
        <div className="room-search-form">
        </div>
      </div>
      <div className="book-button">
        <Link to="/roomreserve">
          <Button variant="contained" color="primary" size="large">
            Book Now
          </Button>
        </Link>
      </div>
    </>
  );
}
