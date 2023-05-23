import { StyledContactsButton } from 'components/Contacts/ContactsList.styled';
import { UserMenuWrapper } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail, selectUserSignedIn } from 'redux/selectors';
import { getInfoAboutCurrentUser, signOut } from 'redux/operations';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
	const userEmail = useSelector(selectUserEmail);
	const userSignedIn = useSelector(selectUserSignedIn);
	useEffect(() => {
		dispatch(getInfoAboutCurrentUser());
		// eslint-disable-next-line no-use-before-define
	}, [dispatch, userEmail]);
	const dispatch = useDispatch();
	return (
		<UserMenuWrapper>
			<NavLink to="contacts">Contacts</NavLink>
			{userSignedIn && (
				<StyledContactsButton onClick={() => dispatch(signOut())}>
					Sign Out
				</StyledContactsButton>
			)}
			<p>{userEmail}</p>
		</UserMenuWrapper>
	);
};

export default UserMenu;
