import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/home" activeStyle>
			Home
		</NavLink>
		<NavLink to="/account" activeStyle>
			Log In
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;

