import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { addWater, updateWater } from "./operations";

const handleRejected = (state,action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
}


const slice = createSlice({
  name: 'water',
  initialState: initialState,
     extraReducers: builder => {
    builder
      //додавання води
      .addCase(addWater.pending, handlePending)
      .addCase(addWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dailyItems.push(action.payload.data);
      })
      .addCase(addWater.rejected, handleRejected)
      
      //редагування води
      .addCase(updateWater.pending, handlePending)
      .addCase(updateWater.fulfilled, (state, action) => {
        state.isLoading = false;
      const index = state.dailyItems.findIndex(item => item._id === action.payload._id);
      if (index !== -1) {state.dailyItems[index] = action.payload;}
      })
      .addCase(updateWater.rejected,handleRejected)
    
  },
});

export const waterReducer = slice.reducer;
