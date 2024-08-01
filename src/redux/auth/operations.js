import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../utils/axios";



export const register = createAsyncThunk(
  "auth/register",
    async (formData, thunkApi) => {
    try {
        const response = await instance.post("/users/register", formData);
      
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (loginData, thunkAPI) => {
    try {
        const response = await instance.post('/users/login', loginData);
  
        return response.data;
        
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
        await instance.post('/users/logout');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

