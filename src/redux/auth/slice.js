import { createSlice } from '@reduxjs/toolkit';
import { login, logout, registerUser } from './operations';
import { initialState } from './initialState';

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
  initialState: {
    user: {
      email: null,
    },
    accessToken: null,
    isLoggedIn: false,
  },

  extraReducers: builder => {
    builder
      //register
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, handleRejected)
      //login
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, handleRejected)

      // logout
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(logout.rejected, handleRejected);
  },
});

export const authReducer = slice.reducer;
