import { userRegistration } from '../interfaces/interfaces'
import { axiosInstance } from './axios'

export const apiService = {
  registerUser: async ({ username, email, password }: userRegistration) => {
    const res = await axiosInstance.post('/api/v1/user/register', {
      username,
      email,
      password,
    })
    return res.data
  },

  loginUser: async ({
    email,
    password,
  }: Omit<userRegistration, 'username'>) => {
    const res = await axiosInstance.post('/api/v1/user/login', {
      email,
      password,
    })
    return res.data
  },

  getCharacters: async (page: number = 1) => {
    const res = await axiosInstance.get(`/api/v1/character?page=${page}`)
    return res.data
  },

  getFavorites: async () => {
    const res = await axiosInstance.get('/api/v1/character/favorite')
    return res.data
  },

  addFavorite: async (characterId: number) => {
    const res = await axiosInstance.post('/api/v1/character/favorite', {
      characterId,
    })
    return res.data
  },

  removeFavorite: async (favoriteId: number) => {
    const res = await axiosInstance.delete(
      `/api/v1/character/favorite/?favoriteId=${favoriteId}`
    )
    return res.data
  },
}
