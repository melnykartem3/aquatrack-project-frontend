import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, registerUser, updateUser } from './operations';
import { INITIAL_STATE } from './initialState';
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const slice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      //register
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, handleRejected)
      // Login
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      // logout
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, () => { return INITIAL_STATE; })
      .addCase(logout.rejected, handleRejected)
      //refresh
      .addCase(refresh.pending, handlePending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
        state.user = { ...state.user, ...action.payload.data.user };
      })
      .addCase(refresh.rejected, handleRejected, state => {
        state.isRefreshing = true;
      })
      // updateUser
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { ...state.user, ...action.payload.user };
      })
      .addCase(updateUser.rejected, handleRejected);
  },
});
export const authReducer = slice.reducer;
