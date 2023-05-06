import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
const CONTACTS_INITIAL_STATE = {
  contacts: {
    contacts: [],
    filteredContacts: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: CONTACTS_INITIAL_STATE,

  // reducers for fetching items
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, (state, action) => {
      state.contacts.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.contacts = action.payload;
      state.contacts.filteredContacts = action.payload;
      state.contacts.isLoading = false;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.contacts.isLoading = false;
      state.contact.serror = action.payload;
      state.contacts.error = console.log('chel');
    });

    // reducers for deleting contact
    builder.addCase(deleteContact.pending, (state, action) => {
      state.contacts.isLoading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      const contactIndex = state.contacts.filteredContacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.filteredContacts = [
        ...state.contacts.filteredContacts.slice(0, contactIndex),
        ...state.contacts.filteredContacts.slice(contactIndex + 1),
      ];
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.contacts.error = console.log(action.error);
    });

    // reducers for adding contact
    builder.addCase(addContact.pending, (state, action) => {
      state.contacts.isLoading = true;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.filteredContacts = [
        ...state.contacts.filteredContacts,
        action.payload,
      ];
    });
  },
  reducers: {
    setFilters(state, action) {
      state.filter = action.payload;
      state.contacts.filteredContacts = state.contacts.contacts.filter(
        contact => contact.name.includes(state.filter)
      );
    },
  },
});
export const { setFilters } = contactsSlice.actions;
export default contactsSlice;
