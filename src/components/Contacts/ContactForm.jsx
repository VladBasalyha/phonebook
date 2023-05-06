import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { InputSpan, StyledContactForm } from './ContactForm.styled';
import { InputStyles } from 'globalStyles/Common.styled';
import { StyledContactsButton } from './ContactsList.styled';
const ContactForm = () => {
  // hooks
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  // dispatches
  const dispatchAddContact = () =>
    dispatch(addContact({ name: name, number: number }));
  const resetValues = () => {
    setName('');
    setNumber('');
  };
  // set controlled component
  const setContactValues = e => {
    e.preventDefault();
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        return;
      case 'number':
        setNumber(e.target.value);
        return;
      default:
        return;
    }
  };

  const addContactForm = e => {
    e.preventDefault();
    if (name === '' || number === '') {
      alert('chel');
      return;
    }
    dispatchAddContact();
    resetValues();
  };

  return (
    <StyledContactForm onSubmit={addContactForm}>
      <InputStyles
        value={name}
        id="name"
        onChange={setContactValues}
        name="name"
        type="text"
      />
      <InputSpan htmlFor="name">name</InputSpan>

      <InputStyles
        value={number}
        onChange={setContactValues}
        name="number"
        type="text"
      />
      <InputSpan>number</InputSpan>
      <StyledContactsButton type="submit">Add contact</StyledContactsButton>
    </StyledContactForm>
  );
};
export default ContactForm;
