import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        {/* Ascenda Logo (IMAGE) */}
        <img
          src="https://images.crunchbase.com/c_lpad,f_auto,q_auto:eco,dpr_1/wdssvw2kkzjjiagwckjf" alt=""
          className="img"
        />
        {/* Register and Login Buttons */}
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;