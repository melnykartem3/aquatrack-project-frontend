import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./operations";
import { initialState } from "./initialState";

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
}

const slice = createSlice({
  name: 'auth',
  initialState: initialState,

  extraReducers: builder => {
    builder
      //register
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(register.rejected, handleRejected)
      //login
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(login.rejected, handleRejected)
      
      //refresh

      // .addCase(refreshUser.pending, handlePending, state => {
      //   state.isRefreshing = true;
      // })
      // .addCase(refreshUser.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.isRefreshing = false;
      //   state.isLoggedIn = true;
      //   state.accessToken = action.payload.accessToken;
      // })
      // .addCase(refreshUser.rejected, handleRejected, state => {
      //   state.isRefreshing = true;
      // })

      // logout
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(logout.rejected, handleRejected)
      
  },
});


export const authReducer = slice.reducer;