import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './Navbarelements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/findreserve' activeStyle>
			Find & Reserve
		</NavLink>
		<NavLink to='/hotels' activeStyle>
			Hotels
		</NavLink>
		<NavLink to='/rewards' activeStyle>
			Rewards
		</NavLink>
		<NavLink to='/contact' activeStyle>
			Contact
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
        {/* <CircleNavBtn>
		<CircleNavBtnLink to='/signin'>Facebook</CircleNavBtnLink>
		</CircleNavBtn> */}
	</Nav>
	</>
);
};

export default Navbar;