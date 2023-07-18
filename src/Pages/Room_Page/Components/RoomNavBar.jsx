import { Link } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import "../Stylesheets/Room_NavBar.css";
import { Button, Divider } from "@mui/material";
import { reserveButtonStyle } from "../Content";
import { useState } from "react";

export default function NavBar() {
  const logoScroll =
    "https://images.crunchbase.com/c_lpad,f_auto,q_auto:eco,dpr_1/wdssvw2kkzjjiagwckjf";
  const logo =
    "https://careers.recruiteecdn.com/image/upload/production/images/AQcM/m-UAX0dt_4Qa.png";
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <div className="header">
        <div className={color ? "navbar-scroll" : "navbar"}>
          <div className="navbar-top">
            <div className="navbar-logo">
              <Link to="/home">
                <img src={color ? logoScroll : logo} alt="Ascenda Logo" />
              </Link>
            </div>
            <ul className="navbar-links">
              <Link to="/findreserve">
                <li>Find & Reserve</li>
              </Link>
              <Link to="/hotels">
                <li>Hotels</li>
              </Link>
              <Link to="/rewards">
                <li>Rewards</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <Divider sx={{ bgcolor: "white" }} />
          <div className="navbar-bottom">
            <div className="title">JW MARRIOTT HOTEL SINGAPORE SOUTH BEACH</div>
            <ul className="navbar-links">
              <li>
                <a href="tel:+65 -68181888">
                  <CallIcon />
                  +65 -68181888
                </a>
              </li>
              <li>
                <Button sx={reserveButtonStyle}>Reserve</Button>
              </li>
            </ul>
          </div>
          <Divider sx={{ bgcolor: "white" }} />
        </div>
      </div>
    </>
  );
}
