import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../utils/axios';
import toast from 'react-hot-toast';
export const registerUser = createAsyncThunk(
  'auth/signup',
  async (formData, thunkAPI) => {
    try {
      const response = await instance.post('/auth/signup', formData);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.data?.message || error.message;
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
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
      const errorMessage = error.response?.data?.data?.message || error.message;

      // console.log('Error message from backend:', errorMessage);
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
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

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  try {
    const { data } = await instance.post('/auth/refresh');
    return data.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getUser = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  try {
    const { data } = await instance.get('/auth/current');
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const updateUser = createAsyncThunk(
  'auth/update',
  async ({ userId, formData }, thunkAPI) => {
    try {
      const { data } = await instance.patch(
        `/auth/update/${userId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const requestResetEmail = createAsyncThunk(
  'auth/requestResetEmail',
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.post('/auth/request-reset-email', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const response = await instance.post('/auth/reset-password', {
        token,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
