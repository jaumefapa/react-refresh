import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import {
  addFavorite,
  removeFavorite,
} from '../redux/features/favorites/favoritesActions'

export const useIsFavorite = (characterId: number) => {
  const { favorites, error, loading } = useAppSelector(state => state.favorites)
  const [isFavorite, _setIsFavorite] = useState(
    favorites.some(favorite => favorite.characterId === characterId)
  )
  const dispatch = useAppDispatch()

  const setIsFavorite = (newValue: boolean) => {
    if (newValue) {
      dispatch(addFavorite(characterId))
      _setIsFavorite(true)
    } else {
      const favoriteId = favorites.find(
        favorite => favorite.characterId === characterId
      )?.id
      if (favoriteId) dispatch(removeFavorite(favoriteId))
      _setIsFavorite(false)
    }
  }

  if (error) _setIsFavorite(prevState => !prevState)

  return {
    isFavorite,
    setIsFavorite,
    error,
    loading,
  }
}
