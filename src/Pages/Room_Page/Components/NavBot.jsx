import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import { Button, Divider, useMediaQuery } from "@mui/material";
import { reserveButtonStyle } from "../Content";

export default function ({ hotelName }) {
    const isSmall = useMediaQuery('(max-width:700px)')
  return (
    <>
      <div className="navbar-bottom">
        <div className="hotel-name">{hotelName}</div>
        <div className="navbar-bottom links">
          <a href="tel:+65 -68181888">
            <CallIcon />
            +65 -68181888
          </a>
        </div>
      </div>
      <Divider sx={{ bgcolor: "white" }} />
    </>
  );
}
