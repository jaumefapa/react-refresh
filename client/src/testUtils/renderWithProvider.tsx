import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import type { AppStore, RootState } from '../redux/store';
import authReducer from '../redux/features/auth/authSlice';
import charactersReducer from '../redux/features/characters/charactersSlice'
import favoritesReducer from '../redux/features/favorites/favoritesSlice'
import { BrowserRouter } from 'react-router-dom'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}

const defaultTestingStore = (preloadedState = {}) => {
  return configureStore({
  reducer: {
    auth: authReducer,
    characters: charactersReducer,
    favorites: favoritesReducer,
  },
  preloadedState
})}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    ...renderOptions
  }: ExtendedRenderOptions = {}
  ) {
  const store = defaultTestingStore(preloadedState);
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <BrowserRouter >
          {children}
        </BrowserRouter>
      </Provider>)
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}