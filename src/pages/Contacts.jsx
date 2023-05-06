import ContactForm from 'components/Contacts/ContactForm';
import {
  InputSpan,
  StyledContactForm,
} from 'components/Contacts/ContactForm.styled';
import ContactsList from 'components/Contacts/ContactsList';
import { InputStyles } from 'globalStyles/Common.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';
import { selectIsLoading } from 'redux/selectors';
import { SpinnerCircular } from 'spinners-react';

const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);
  const onFilterChange = e => {
    dispatch(setFilters(e.target.value));
  };
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm></ContactForm>

      <StyledContactForm>
        <InputStyles onChange={onFilterChange} type="text"></InputStyles>
        <InputSpan>filter contacts</InputSpan>
      </StyledContactForm>
      <h1>Contacts</h1>
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
