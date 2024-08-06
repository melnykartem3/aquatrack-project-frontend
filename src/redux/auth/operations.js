import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../utils/axios';

instance.defaults.baseURL = 'https://aquatrack-project-backend.onrender.com/';

export const registerUser = createAsyncThunk(
  'auth/signup',
  async (formData, thunkAPI) => {
    try {
      const response = await instance.post('/auth/signup', formData);
      await thunkAPI.dispatch(login(formData)).unwrap();
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
    await instance.post('/users/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const refreshUser = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkApi) => {
//     const state = thunkApi.getState();
//     const token = state.auth.token;

//     if (token === null) {
//       return thunkApi.rejectWithValue('Unable to fetch user');
//     }
//     try {
//       const response = await instance.get("/users/current");
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
