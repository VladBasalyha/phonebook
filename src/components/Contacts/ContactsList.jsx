import Contact from './Contact';
import { StyledContactsList } from './ContactsList.styled';
const ContactsList = ({ contacts }) => {
  return (
    <StyledContactsList>
      {contacts.map(contact => {
        return (
          <Contact
            image={contact.photo}
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          ></Contact>
        );
      })}
    </StyledContactsList>
  );
};
export default ContactsList;
