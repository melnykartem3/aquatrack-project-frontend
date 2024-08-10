import axios from 'axios';
import { store } from '../redux/store';
import { refresh } from '../redux/auth/operations';
export const instance = axios.create({
  baseURL: 'https://aquatrack-project-backend.onrender.com/',
  // baseURL: 'http://localhost:3001',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
export const setToken = accessToken => {
  instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};
export const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};
let isRefreshing = false;
let pendingRequests = [];

const processQueue = (error, token = null) => {
  pendingRequests.forEach(promise => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });

  pendingRequests = [];
};

instance.interceptors.request.use(
  async config => {
    if (
      !config.url.includes('/auth/register') &&
      !config.url.includes('/auth/login')
    ) {
      const state = store.getState();
      const token = state.auth.accessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.config.url.includes('/auth/refresh') &&
      (error.response.status === 400 || error.response.status === 401)
    ) {
      clearToken();
      const state = store.getState();
      state.auth.accessToken = null;
      state.auth.isLoggedIn = false;
      window.localStorage.removeItem('persist:auth');
      return Promise.reject(error);
    }

    if (
      error.response &&
      !error.response.config.url.includes('/auth/refresh') &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          pendingRequests.push({ resolve, reject });
        })
          .then(token => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return instance(originalRequest);
          })
          .catch(err => {
            return Promise.reject(err);
          });
      }

      isRefreshing = true;

      return new Promise((resolve, reject) => {
        store
          .dispatch(refresh())
          .then(resultAction => {
            if (refresh.fulfilled.match(resultAction)) {
              setToken(resultAction.payload.accessToken);
              originalRequest.headers.Authorization = `Bearer ${resultAction.payload.accessToken}`;
              processQueue(null, resultAction.payload.accessToken);
              resolve(instance(originalRequest));
            } else {
              clearToken();
              processQueue(resultAction.payload, null);
              reject(resultAction.payload);
            }
          })
          .catch(refreshError => {
            clearToken();
            processQueue(refreshError, null);
            reject(refreshError);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(error);
  },
);
