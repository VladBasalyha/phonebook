import styled from '@emotion/styled';

export const ItemsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	border: 1px solid black;
	padding: 5px 10px;
`;
export const Text = styled.p`
	font-size: 14px;
	font-weight: 700;
`;

export const Button = styled.button`
	padding: 20px;
`;
export const InputStyles = styled.input`
	border: 0;
	padding: 10px 10px 5px 10px;
	transition: 100ms;
	border-bottom: 1px solid black;
	color: grey;
	&:focus {
		outline: none;
	}
	& + label {
		transform: translate(20px, -300%);
		pointer-events: none;
		font-weight: bold;
	}
	&:focus + label {
		transform: translate(20px, -400%);
		transition: 250ms;
		outline: none;
		position: relative;
		font-size: 14px;
		color: black;
	}
`;
export const Form = styled.form`
	width: 80%;
	background-color: white;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	gap: 10px;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	margin: auto;
	padding: 30px;
	border-radius: 15px;
	margin: 10px auto;
	max-width: 700px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
export const InputSpan = styled.label`
	transition: 250ms;
	position: relative;
`;
