import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const SignNavigation = () => {
	return (
		<>
			<NavLink to="registration">Registration</NavLink>
			<NavLink to="login">Login</NavLink>
		</>
	);
};
