import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from './authActions'
import { stateAuthSlice } from '../../../interfaces/interfaces'

const initialState: stateAuthSlice = {
  loading: false,
  userInfo: {
    username: '',
    email: '',
    token: '',
  },
  userToken: null,
  success: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: () => initialState,
  },
  extraReducers: builder => {
    builder
      // registerUser
      .addCase(registerUser.pending, state => {
        state.loading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.userInfo = action.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = 'Error registering user. Please try again.'
      })
      // loginUser
      .addCase(loginUser.pending, state => {
        state.loading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.userInfo = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = 'Wrong credentials. Please try again.'
      })
  },
})

export const { resetAuth } = authSlice.actions
export default authSlice.reducer
