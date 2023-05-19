import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL =
	'https://644ef1024e86e9a4d803e476.mockapi.io/collection/contacts';

// common URL for our api
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthorizationHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthorizationHeader = () => {
	axios.defaults.headers.common.Authorization = '';
};

export const fetchContacts = createAsyncThunk(
	'contacts/fetchContacts',
	async (_, thunkAPI) => {
		try {
			const res = await axios.get('contacts');
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
			const res = await axios.post('users/signup', userData);
			setAuthorizationHeader(res.data.token);
			console.log(setAuthorizationHeader(res.data.token));
			return res.data;
		} catch (error) {
			thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const signIn = createAsyncThunk(
	'user/signIn',
	async (userData, thunkAPI) => {
		try {
			const res = await axios.post('users/login', userData);
			setAuthorizationHeader(res.data.token);
			console.log(setAuthorizationHeader(res.data.token));
			return res.data;
		} catch (error) {
			thunkAPI.rejectWithValue(error.message);
		}
	}
);
