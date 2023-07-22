import { Link } from "react-router-dom";
import { useState } from "react";
import TemporaryDrawer from "./Drawer";
import { Divider } from "@mui/material";

export default function NavTop({color, setColor}) {
  const logoScroll =
    "https://images.crunchbase.com/c_lpad,f_auto,q_auto:eco,dpr_1/wdssvw2kkzjjiagwckjf";
  const logo =
    "https://careers.recruiteecdn.com/image/upload/production/images/AQcM/m-UAX0dt_4Qa.png";

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
      <div className="navbar-top">
        <div className="navbar-logo">
          <Link to="/">
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
          <Link to="/login">
            <li>Sign in</li>
          </Link>
        </ul>
        <div className="navbar-hamburger">
          <TemporaryDrawer />
        </div>
      </div>
      <Divider sx={{ bgcolor: "white" }} />
    </>
  );
}
