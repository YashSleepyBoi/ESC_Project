import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import { Button, Divider, useMediaQuery } from "@mui/material";
import { reserveButtonStyle } from "../Content";

export default function NavBot() {
    const isSmall = useMediaQuery('(max-width:700px)')
  return (
    <>
      <div className="navbar-bottom">
        <div className="title">ASCENDA LOYALTY HOTEL SINGAPORE SOUTH BEACH</div>
        <div className="navbar-bottom links">
          <a href="tel:+65 -68181888">
            <CallIcon />
            +65 -68181888
          </a>
          <Link to="/findreserve">
            <Button
              sx={{
                ...reserveButtonStyle,
                fontSize: isSmall ? "0.75rem" : "auto",
              }}
            >
              Reserve
            </Button>
          </Link>
        </div>
      </div>
      <Divider sx={{ bgcolor: "white" }} />
    </>
  );
}
