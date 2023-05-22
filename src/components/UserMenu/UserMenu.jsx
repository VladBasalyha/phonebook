import { StyledContactsButton } from 'components/Contacts/ContactsList.styled';
import { UserMenuWrapper } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/selectors';
import { getInfoAboutCurrentUser, signOut } from 'redux/operations';
import { useEffect } from 'react';
import Contacts from 'pages/Contacts';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
	const userEmail = useSelector(selectUserEmail);

	useEffect(() => {
		dispatch(getInfoAboutCurrentUser());
	}, [userEmail]);
	const dispatch = useDispatch();
	return (
		<UserMenuWrapper>
			<NavLink to="contacts">Contacts</NavLink>

			<p>{userEmail}</p>
			<StyledContactsButton onClick={() => dispatch(signOut())}>
				Sign Out
			</StyledContactsButton>
		</UserMenuWrapper>
	);
};

export default UserMenu;
