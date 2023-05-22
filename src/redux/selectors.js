export const getСontacts = state => state.contacts.contacts.contacts;

export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectFilterValue = state => state.filter;

export const selectFilteredContacts = state =>
	state.contacts.contacts.filteredContacts;

export const selectUserInfo = state => state.user;

export const selectUserEmail = state => state.user.userInfo.email;

export const selectUserSignedIn = state => state.user.isSignedIn;
