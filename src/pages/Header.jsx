import { StyledContactsButton } from 'components/Contacts/ContactsList.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectUserSignedIn } from 'redux/selectors';
import { SignNavigation } from './SignNavigation';

const Header = () => {
	const signedIn = useSelector(selectUserSignedIn);
	return (
		<>
			<header style={{ display: 'flex', gap: '25px' }}>
				<NavLink to="home">Home</NavLink>
				{signedIn ? <UserMenu /> : <SignNavigation />}
			</header>
			<Outlet>
				<Suspense fallback={<div>Loading...</div>} />
			</Outlet>
		</>
	);
};
export default Header;
