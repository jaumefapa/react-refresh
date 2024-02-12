import { createAsyncThunk } from '@reduxjs/toolkit'

import { apiService } from '../../../services/api'
import { userRegistration } from '../../../interfaces/interfaces'

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, email, password }: userRegistration, thunkAPI) => {
    try {
      return await apiService.registerUser({ username, email, password })
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: 'Failed to register user.',
      })
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: Omit<userRegistration, 'username'>, thunkAPI) => {
    try {
      return await apiService.loginUser({ email, password })
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: 'Failed to login.',
      })
    }
  }
)
