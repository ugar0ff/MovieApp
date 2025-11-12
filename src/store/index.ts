import { configureStore } from '@reduxjs/toolkit'
import { tmdbApi } from './tmdbApi'
import favoritesReducer from './favoritesSlice'
import authReducer from './authSlice'
import settingsReducer from './settingsSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    auth: authReducer,
    settings: settingsReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
