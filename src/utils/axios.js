import axios from "axios";


export const instance = axios.create({
//   baseURL: 'https://aquatrack-webapp-backend.onrender.com',
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
    instance.defaults.headers.common.Authorization = '';
}