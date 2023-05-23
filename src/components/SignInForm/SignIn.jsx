import { StyledContactsButton } from 'components/Contacts/ContactsList.styled';
import { Form, InputSpan, InputStyles } from 'globalStyles/Common.styled';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from 'redux/operations';
import { selectUserRefreshingStatus } from 'redux/selectors';

const SignIn = () => {
	const dispatch = useDispatch();
	const isUserRefreshing = useSelector(selectUserRefreshingStatus);

	const toSignIn = e => {
		e.preventDefault();
		const form = e.currentTarget;
		dispatch(
			signIn({
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
				<Form onSubmit={toSignIn}>
					<InputStyles type="email" name="email"></InputStyles>
					<InputSpan>Email</InputSpan>
					<InputStyles name="password" type="text"></InputStyles>
					<InputSpan>Password</InputSpan>
					<StyledContactsButton>Sign In</StyledContactsButton>
				</Form>
			)}
		</>
	);
};
export default SignIn;
