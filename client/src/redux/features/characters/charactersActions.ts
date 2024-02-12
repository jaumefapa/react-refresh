import { createAsyncThunk } from '@reduxjs/toolkit'

import { apiService } from '../../../services/api'

export const getCharacters = createAsyncThunk(
  'characters/get',
  async (page: number = 1, thunkAPI) => {
    try {
      return await apiService.getCharacters(page)
    } catch (error) {
      console.error(error)
      return thunkAPI.rejectWithValue({
        message: 'Failed to fetch characters.',
      })
    }
  }
)
