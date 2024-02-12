import { createAsyncThunk } from '@reduxjs/toolkit'

import { apiService } from '../../../services/api'

export const getFavorites = createAsyncThunk(
  'favorites/get',
  async (_, thunkAPI) => {
    try {
      return await apiService.getFavorites()
    } catch (error) {
      console.error(error)
      return thunkAPI.rejectWithValue({
        message: 'Failed to fetch favorites.',
      })
    }
  }
)

export const addFavorite = createAsyncThunk(
  'favorites/add',
  async (characterId: number, thunkAPI) => {
    try {
      return await apiService.addFavorite(characterId)
    } catch (error) {
      console.error(error)
      return thunkAPI.rejectWithValue({
        message: 'Failed to add favorite.',
      })
    }
  }
)

export const removeFavorite = createAsyncThunk(
  'favorites/remove',
  async (favoriteId: number, thunkAPI) => {
    try {
      return await apiService.removeFavorite(favoriteId)
    } catch (error) {
      console.error(error)
      return thunkAPI.rejectWithValue({
        message: 'Failed to remove favorite.',
      })
    }
  }
)
