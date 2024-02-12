import { createSlice } from '@reduxjs/toolkit'
import { addFavorite, getFavorites, removeFavorite } from './favoritesActions'
import { stateFavorites } from '../../../interfaces/interfaces'

const initialState: stateFavorites = {
  loading: false,
  success: false,
  error: null,
  favorites: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    resetFavorites: () => initialState,
  },
  extraReducers: builder => {
    builder
      // getFavorites
      .addCase(getFavorites.pending, state => {
        state.loading = true
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.favorites = action.payload
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.loading = false
        state.error = 'Error getting favorites. Please try again.'
      })
      // addFavorite
      .addCase(addFavorite.pending, state => {
        state.loading = true
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.favorites = [...state.favorites, action.payload]
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.loading = false
        state.error = 'Error adding favorite. Please try again.'
      })
      // removeFavorite
      .addCase(removeFavorite.pending, state => {
        state.loading = true
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.favorites = state.favorites.filter(
          favorite => favorite.id !== action.payload.id
        )
      })
      .addCase(removeFavorite.rejected, (state, action) => {
        state.loading = false
        state.error = 'Error removing favorite. Please try again.'
      })
  },
})

export const { resetFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
