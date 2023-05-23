import ContactForm from 'components/Contacts/ContactForm';
import ContactsList from 'components/Contacts/ContactsList';
import { Form, InputSpan, InputStyles } from 'globalStyles/Common.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/operations';
import {
	selectFilteredContacts,
	selectUserRefreshingStatus,
} from 'redux/selectors';
import { selectIsLoading } from 'redux/selectors';
import { SpinnerCircular } from 'spinners-react';

const Contacts = () => {
	const contacts = useSelector(selectFilteredContacts);
	const onFilterChange = e => {
		dispatch(setFilters(e.target.value));
	};
	const isRefreshingUserStatus = useSelector(selectUserRefreshingStatus);
	const isLoading = useSelector(selectIsLoading);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<>
			{isRefreshingUserStatus ? (
				<h2>Loading...</h2>
			) : (
				<>
					<ContactForm></ContactForm>
					<Form>
						<InputStyles onChange={onFilterChange} type="text"></InputStyles>
						<InputSpan>filter contacts</InputSpan>
					</Form>
					<h1>Contacts</h1>
				</>
			)}
			{isLoading && (
				<SpinnerCircular
					style={{ position: 'fixed', left: '50%' }}
					color="black"
				/>
			)}

			<ContactsList contacts={contacts}></ContactsList>
		</>
	);
};
export default Contacts;
