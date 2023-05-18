export const getСontacts = state => state.contacts.contacts.contacts;

export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectFilterValue = state => state.filter;

export const selectFilteredContacts = state =>
	state.contacts.contacts.filteredContacts;
