import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function RoomSearch() {
  return (
    <>
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
