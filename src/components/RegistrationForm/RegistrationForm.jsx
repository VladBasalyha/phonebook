import { StyledContactsButton } from 'components/Contacts/ContactsList.styled';
import { Form, InputSpan, InputStyles } from 'globalStyles/Common.styled';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/operations';
import { selectUserRefreshingStatus } from 'redux/selectors';

const RegistrationForm = () => {
	const isUserRefreshing = useSelector(selectUserRefreshingStatus);

	const dispatch = useDispatch();

	const toSignUp = e => {
		e.preventDefault();
		const form = e.currentTarget;
		dispatch(
			registerUser({
				name: form.name.value,
				email: form.email.value,
				password: form.password.value,
			})
		);
	};

	return (
		<>
			{isUserRefreshing ? (
				<h2>Loading...</h2>
			) : (
				<>
					<h2>Enter to sign up</h2>
					<Form onSubmit={toSignUp}>
						<InputStyles name="email" type="email" />
						<InputSpan>email</InputSpan>
						<InputStyles name="name" type="text" />
						<InputSpan>name</InputSpan>
						<InputStyles name="password" type="text" />
						<InputSpan>password</InputSpan>
						<StyledContactsButton>Sign Up</StyledContactsButton>
					</Form>
				</>
			)}
		</>
	);
};

export default RegistrationForm;
