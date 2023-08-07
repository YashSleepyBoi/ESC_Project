import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TemporaryDrawer from "./Drawer";
import { Divider } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { links } from "../../../Constants";
import isLoggedIn from "../../Login_Page/Components/isLoggedIn";

export default function NavTop({ color, setColor }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [useruid, setUseruid] = useState("");
  // Get the user logged in info
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.email;
        setUseruid(uid);
        setLoggedIn(true);
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        setLoggedIn(false);
      }
    });
  }, []);

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
          {links.map((item) => {
            return (
              <Link to={item.route} key={item.name}>
                <li><item.icon/></li>
              </Link>
            );
          })}
          <Link to={isLoggedIn ? "/profile" : "/login"}>
            <li>{isLoggedIn ? useruid : "Login"}</li>
          </Link>
          <Link to="/register">
            <li>{isLoggedIn ? "" : "Sign Up"}</li>
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
