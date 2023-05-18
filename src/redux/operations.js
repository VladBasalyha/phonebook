import { createAsyncThunk } from '@reduxjs/toolkit';
const baseURL =
	'https://644ef1024e86e9a4d803e476.mockapi.io/collection/contacts';

const userInfoURL = 'https://connections-api.herokuapp.com/users';

const setAuthHeader = token => `Bearer ${token}`;

export const fetchContacts = createAsyncThunk(
	'contacts/fetchContacts',
	async (_, thunkAPI) => {
		try {
			const fetching = await fetch(baseURL);
			const res = await fetching.json();
			return res;
		} catch (error) {
			console.log(error);
		}
	}
);

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (contact, thunkAPI) => {
		try {
			const fetching = await fetch(baseURL, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
				body: JSON.stringify(contact),
			});
			const res = fetching.json();
			return res;
		} catch (error) {
			console.log(error);
		}
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (contactId, thunkAPI) => {
		try {
			const fetching = await fetch(`${baseURL}/${contactId}`, {
				method: 'DELETE',
			});
			const res = fetching.json();
			return res;
		} catch (error) {
			console.log(error);
		}
	}
);

export const registerUser = createAsyncThunk(
	'user/signUp',
	async (userData, thunkAPI) => {
		try {
			const fetching = await fetch(`${userInfoURL}/signup`, {
				method: 'POST',
				body: JSON.stringify(userData),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});
			const res = await fetching.json();
			setAuthHeader(res.token);
			console.log(setAuthHeader(res.token));
			return res;
		} catch (error) {
			console.log(error);
		}
	}
);

export const signIn = createAsyncThunk();
