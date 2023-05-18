import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<header style={{ display: 'flex', gap: '25px' }}>
				<NavLink to="home">Home</NavLink>
				<NavLink to="contacts">Contacts</NavLink>
				<NavLink to="registration">Registration</NavLink>
			</header>
			<Outlet>
				<Suspense fallback={<div>Loading...</div>} />
			</Outlet>
		</>
	);
};
export default Header;
