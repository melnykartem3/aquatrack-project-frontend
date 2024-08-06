import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../utils/axios";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
    try {
        const response = await instance.get('/contacts');
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addWater = createAsyncThunk(
  'water/addWater',
  async (water, thunkAPI) => {
    try {
      const response = await instance.post('/water', water);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
        const response = await instance.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
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
  }
);