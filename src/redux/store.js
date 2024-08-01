import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { waterReducer } from './water/slice';


const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ['accessToken', 'isLoggedIn'],
};

export const store = configureStore({
  reducer: {
    water:waterReducer,
    auth:persistReducer(authPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);