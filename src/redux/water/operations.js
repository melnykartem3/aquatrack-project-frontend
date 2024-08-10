import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../utils/axios';

export const fetchWaterListDaily = createAsyncThunk(
  'water/perDay',
  async ({userId, date}, thunkAPI) => {
    try {
      const response = await instance.get(`/water/perDay`, { 
        params: {
          userId, 
          day: date
        }
        
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// ще зробити феч за сьогодні і видалення 

export const addWater = createAsyncThunk(
  'water/addWater',
  async (water, thunkAPI) => {
    try {
      const response = await instance.post('/water', water);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const updateWater = createAsyncThunk(
  'water/updateWater',
  async ({ waterId, ...water }, thunkAPI) => {
    try {
      const response = await instance.patch(`/water/${waterId}`, water);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getWaterForMonth = createAsyncThunk(
  'water/perMonth',
  async (month, thunkAPI) => {
    try {
      const response = await instance.get(`water/perMonth`, {params: { month },}); //2024-08
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
