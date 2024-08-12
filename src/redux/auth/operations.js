import { createAsyncThunk } from '@reduxjs/toolkit';
import {instance} from '../../utils/axios';
export const registerUser = createAsyncThunk(
  'auth/signup',
  async (formData, thunkAPI) => {
    try {
      const response = await instance.post('/auth/signup', formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const login = createAsyncThunk(

  'auth/login',
  async (loginData, thunkAPI) => {
    try {
      const response = await instance.post('/auth/signin', loginData);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/auth/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.post('/auth/refresh');
      return data.data;
    } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
  }
);

export const getUser = createAsyncThunk('auth/current',
  async (_, thunkAPI) => {
  try {
    const { data } = await instance.get('/auth/current');
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
  });


export const updateUser = createAsyncThunk(
  'auth/update',
  async ({ userId, ...formData }, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/auth/update/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);