import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, instance, setToken } from '../../utils/axios';
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
      setToken(response.data.data.accessToken);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/auth/logout');
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
// export const refreshUser = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkApi) => {
//     const state = thunkApi.getState();
//     const token = state.auth.accessToken;
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
