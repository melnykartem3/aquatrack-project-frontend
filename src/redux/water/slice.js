import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addWater,
  updateWater,
  getWaterForMonth,
  fetchWaterListDaily,
} from './operations';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const slice = createSlice({
  name: 'water',
  initialState: initialState,
  extraReducers: builder => {
    builder
      // Додавання води
      .addCase(addWater.pending, handlePending)
      .addCase(addWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dailyItems.dayItems.push(action.payload.data);
      })
      .addCase(addWater.rejected, handleRejected)

      // Редагування води
      .addCase(updateWater.pending, handlePending)
      .addCase(updateWater.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.dailyItems.dayItems.findIndex(
          item => item._id === action.payload._id,
        );
        if (index !== -1) {
          state.dailyItems.dayItems[index] = action.payload;
        }
      })
      .addCase(updateWater.rejected, handleRejected)

      // Отримання води за місяць
      .addCase(getWaterForMonth.pending, handlePending)
      .addCase(getWaterForMonth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.monthlyItems = action.payload;
      })
      .addCase(getWaterForMonth.rejected, handleRejected)

      // Отримання списку води за день
      .addCase(fetchWaterListDaily.pending, handlePending)
      .addCase(fetchWaterListDaily.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dailyItems = action.payload;
      })
      .addCase(fetchWaterListDaily.rejected, handleRejected);
  },
});

export const waterReducer = slice.reducer;

