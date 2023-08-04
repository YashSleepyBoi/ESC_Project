import "../Stylesheets/Room_NavBar.css";
import { useEffect, useState } from "react";
import NavTop from "./NavTop";
import NavBot from "./NavBot1";

export default function NavBar() {

  const [color, setColor] = useState(false);
  const [show, setShow] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  const showNavBar = () => {
    if (window !== undefined) {
      if (window.scrollY <= prevScroll) {
        setShow(true);
      } else {
        setShow(false);
      }
      setPrevScroll(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showNavBar);
    return () => {
      window.removeEventListener("scroll", showNavBar);
    };
  }, [prevScroll]);

//   return (
//     <>
//       <div className="header">
//         <div
//           className={color ? "navbar-scroll" : "navbar"}
//           style={{top: show ? "0" : "-81px"}}
//           id="navbar"
//         >
//           <NavTop color={color} setColor={setColor}/>
//           <NavBot />
          
//           {/* <QuickSearch/> */}
//         </div>
//       </div>
//     </>
//   );
// }

return (
  <>
    <div className="header">
    
      <div
        className={color ? "navbar-scroll" : "navbar"}
        style={{top: show ? "0" : "-81px"}}
        id="navbar"
      >
        <NavTop />
        <NavBot color={color} setColor={setColor}/>
        
        {/* <QuickSearch/> */}
      </div>
    </div>
  </>
);
}