import { configureStore } from '@reduxjs/toolkit'
import { tmdbApi } from './tmdbApi'
import favoritesReducer from './favoritesSlice'
import authReducer from './authSlice'
import settingsReducer from './settingsSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'

const favoritesPersistConfig = {
  key: 'favorites',
  storage: AsyncStorage,
  whitelist: ['movies'],
}

const persistedFavoritesReducer = persistReducer(favoritesPersistConfig, favoritesReducer)

export const store = configureStore({
  reducer: {
    favorites: persistedFavoritesReducer,
    auth: authReducer,
    settings: settingsReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(tmdbApi.middleware),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
