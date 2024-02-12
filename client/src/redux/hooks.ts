import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { resetAuth } from './features/auth/authSlice'
import { resetCharacters } from './features/characters/charactersSlice'
import { resetFavorites } from './features/favorites/favoritesSlice'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useResetState = () => {
  const dispatch = useAppDispatch()
  return () => {
    dispatch(resetAuth())
    dispatch(resetCharacters())
    dispatch(resetFavorites())
  }
}
