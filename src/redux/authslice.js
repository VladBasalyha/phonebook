import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './operations';

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
		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.userInfo = action.payload;
			state.token = action.payload.token;
			state.isSignedIn = true;
		});
	},
});
export default authSlice;
