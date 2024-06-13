import { createSlice } from "@reduxjs/toolkit";

const initialStateAuth = {
	isAuthenticated: false,
	userData: null,
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialStateAuth,
	reducers: {
		loginStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loginSuccess: (state, action) => {
			state.user = action.payload.user;
			state.isAuthenticated = true;
			state.loading = false;
		},
		loginFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		logout: (state) => {
			state.user = null;
			state.isAuthenticated = false;
			state.loading = false;
			state.error = null;
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, logout } =
    authSlice.actions;
    

export

export default authSlice.reducer;
