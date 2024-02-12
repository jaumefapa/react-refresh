export type userRegistration = {
  username: string
  email: string
  password: string
}

export type userLogin = {
  email: string
  password: string
}

export type userInfo = {
  username: string
  email: string
  token: string
}

export type stateAuthSlice = {
  loading: boolean
  success: boolean
  userInfo: userInfo
  userToken: string | null
  error: string | null
}

export type stateCharacters = {
  loading: boolean
  success: boolean
  error: string | null
  charactersInfo: {
    currentPage: number
    results: character[]
  }
}

export type stateFavorites = {
  loading: boolean
  success: boolean
  error: string | null
  favorites: favoriteCharacter[]
}

export type character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

export type favoriteCharacter = {
  id: number
  characterId: number
}
