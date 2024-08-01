import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

// const handleRejected = (state) => {
//   state.isLoading = false;
//   state.error = true;
// }

// const handlePending = (state) => {
//   state.isLoading = true;
//   state.error = false;
// }

const slice = createSlice({
  name: 'water',
  initialState: initialState,
    extraReducers: (builder) =>
    builder },
);

export const waterReducer = slice.reducer;