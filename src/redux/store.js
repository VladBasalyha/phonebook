import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import authSlice from './authslice';
export const store = configureStore({
	reducer: {
		user: authSlice.reducer,
		contacts: contactsSlice.reducer,
	},
});
