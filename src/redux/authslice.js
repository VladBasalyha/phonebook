import { createSlice } from '@reduxjs/toolkit';
import {
	getInfoAboutCurrentUser,
	registerUser,
	signIn,
	signOut,
} from './operations';

const USER_INITIAL_STATE = {
	userInfo: {
		name: null,
		email: null,
	},
	token: null,
	isSignedIn: false,
	isRefreshing: false,
};

const authSlice = createSlice({
	name: 'userStatus',
	initialState: USER_INITIAL_STATE,

	extraReducers: builder => {
		builder.addCase(registerUser.pending, (state, action) => {
			state.isRefreshing = true;
		});
		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.userInfo = action.payload;
			state.token = action.payload.token;
			state.isSignedIn = true;
			state.isRefreshing = false;
		});
		builder.addCase(signIn.pending, (state, action) => {
			state.isRefreshing = true;
		});
		builder.addCase(signIn.fulfilled, (state, action) => {
			state.userInfo = action.payload.user;
			state.token = action.payload.token;
			state.isSignedIn = true;
			state.isRefreshing = false;
		});
		builder.addCase(getInfoAboutCurrentUser.pending, (state, action) => {
			state.isRefreshing = true;
		});
		builder.addCase(getInfoAboutCurrentUser.fulfilled, (state, action) => {
			state.userInfo = {
				name: action.payload.name,
				email: action.payload.email,
			};
			state.isRefreshing = false;
			state.isSignedIn = true;
		});
		builder.addCase(getInfoAboutCurrentUser.rejected, (state, action) => {
			state.isRefreshing = false;
		});

		builder.addCase(signOut.fulfilled, (state, action) => {
			state.isSignedIn = false;
			state.userInfo = { name: null, email: null };
			state.token = null;
		});
	},
});
export default authSlice;
