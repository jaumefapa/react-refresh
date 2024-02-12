import { createSlice } from '@reduxjs/toolkit'
import { stateCharacters } from '../../../interfaces/interfaces'
import { getCharacters } from './charactersActions'

const initialState: stateCharacters = {
  loading: false,
  success: false,
  error: null,
  charactersInfo: {
    currentPage: 0,
    results: [],
  },
}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    resetCharacters: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getCharacters.pending, state => {
        state.loading = true
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.charactersInfo = {
          currentPage: state.charactersInfo.currentPage + 1,
          results: [...state.charactersInfo.results, ...action.payload.results],
        }
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.loading = false
        state.error = 'Error fetching characters. Please try again.'
      })
  },
})

export const { resetCharacters } = charactersSlice.actions
export default charactersSlice.reducer
