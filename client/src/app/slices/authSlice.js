import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = import.meta.env.VITE_API_DOMAIN;

import { toastError, toastSuccess } from "@/utils/toast";

export const loginUser = createAsyncThunk("auth/loginUser", async (stateData, {rejectWithValue}) => {
	const response = await fetch(`${apiUrl}/auth/signin`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		credentials: "include",
		body: JSON.stringify(stateData),
	});

	if (response.status === 401) {
		return rejectWithValue("Invalid Credentials!")
	}

	const userResponse = await fetch(`${apiUrl}/auth/profile`, {
		method: "GET",
		headers: {
			"Content-type": "application/json",
		},
		credentials: "include",
	});


	const userData = await userResponse.json()
	return {userData}
});

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isAuthenticated: false,
		userData: null,
		loading: false,
		error: null,
	},
	reducers: {
		logout: (state) => {
			state.userData = null;
			state.isAuthenticated = false;
			state.loading = false;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.loading = true;
				state.isAuthenticated = false;
				state.userData = null;
				state.error = null
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				console.log(action.payload.userData)
				state.loading = false;
				state.userData = action.payload.userData;
				state.isAuthenticated = true;
				state.error = null
				toastSuccess("Login Successfully")
			}).addCase(loginUser.rejected, (state, action) => {
				state.loading = false;
				state.userData = null;
				state.isAuthenticated = false;
				toastError(action.payload)
				state.error = action.payload
			})
	},
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
