import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  StyledContactText,
  StyledContactsButton,
  StyledContactsImage,
  StyledContactsItem,
} from './ContactsList.styled';

const Contact = ({ id, name, number, image }) => {
  const dispatch = useDispatch();
  const toDeleteContact = () => dispatch(deleteContact(id));
  deleteContact();
  return (
    <StyledContactsItem id={id}>
      <StyledContactsImage
        width={'250px'}
        height={'200px'}
        src={image}
        alt={name}
      ></StyledContactsImage>
      <StyledContactText>{name}</StyledContactText>
      <StyledContactText>{number}</StyledContactText>
      <StyledContactsButton onClick={toDeleteContact}>
        Delete
      </StyledContactsButton>
    </StyledContactsItem>
  );
};

export default Contact;
