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
			Dogs
		</NavLink>
		<NavLink to='/adoption' activeStyle>
			Adoptions
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
