import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
			const state = thunkAPI.getState();
			const savedToken = state.user.token;
			setAuthorizationHeader(savedToken);
			const res = await axios.get('contacts');

			return res.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (contact, thunkAPI) => {
		try {
			const res = await axios.post('contacts', contact);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (contactId, thunkAPI) => {
		try {
			const res = await axios.delete(`contacts/${contactId}`);
			return res.data;
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
			const state = thunkAPI.getState();
			console.log(state.user.token);

			return res.data;
		} catch (error) {
			thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const signOut = createAsyncThunk('user/signOut', async (_, thunkAPI) => {
	try {
		const res = await axios.post('users/logout');
		clearAuthorizationHeader();
		return res.data;
	} catch (error) {
		console.log(error);
	}
});

export const getInfoAboutCurrentUser = createAsyncThunk(
	'user/getCurrentInfo',
	async (_, thunkAPI) => {
		try {
			const state = thunkAPI.getState();

			const savedToken = state.user.token;
			setAuthorizationHeader(savedToken);
			const res = await axios.get('users/current');
			return res.data;
		} catch (error) {
			console.log(error);
		}
	}
);
