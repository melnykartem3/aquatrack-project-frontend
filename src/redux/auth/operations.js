import { createAsyncThunk } from '@reduxjs/toolkit';
<<<<<<< HEAD
import { instance } from '../../utils/axios';

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      const response = await instance.post('/users/register', formData);

=======
import { clearToken, instance, setToken } from '../../utils/axios';



export const registerUser = createAsyncThunk(
  'auth/signup',
  async (formData, thunkAPI) => {
    try {
      const response = await instance.post('/auth/signup', formData);
>>>>>>> 0d99b802ce404b91d487ab794e0a60c7d69444e7
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
<<<<<<< HEAD
      const response = await instance.post('/users/login', loginData);

      return response.data;
=======
      const response = await instance.post('/auth/signin', loginData);
      setToken(response.data.data.accessToken);
      return response.data.data;
>>>>>>> 0d99b802ce404b91d487ab794e0a60c7d69444e7
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
<<<<<<< HEAD
    const response = await instance.post('/users/logout');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data || error.message);
=======
    await instance.post('/auth/logout');
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
>>>>>>> 0d99b802ce404b91d487ab794e0a60c7d69444e7
  }
});

// export const refreshUser = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkApi) => {
//     const state = thunkApi.getState();
<<<<<<< HEAD
//     const token = state.auth.token;
=======
//     const token = state.auth.accessToken;
>>>>>>> 0d99b802ce404b91d487ab794e0a60c7d69444e7

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
