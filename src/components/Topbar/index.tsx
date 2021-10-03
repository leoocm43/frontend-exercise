import React from 'react';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
NavBtnLink,
} from './TopbarElements';

const Navbar = () => {
return (
	<>
	<Nav>

		<NavMenu>
		<NavLink to='/dogs' activeStyle>
			About
		</NavLink>
		<NavLink to='/adoption' activeStyle>
			Events
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/checkout'>Checkout</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
