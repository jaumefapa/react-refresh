import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import charactersReducer from './features/characters/charactersSlice'
import favoritesReducer from './features/favorites/favoritesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    characters: charactersReducer,
    favorites: favoritesReducer,
  },
})

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
