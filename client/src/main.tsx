import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { URLS } from './constants/index'
import { store } from './redux/store'
import App from './App'
import AuthenticatedRoute from './modules/AuthenticatedRoutes/AuthenticatedRoutes'
import Login from './pages/Login/Login'
import CharactersCatalogue from './pages/CharactersCatalogue/CharactersCatalogue'
import CharacterDetail from './pages/CharacterDetail/CharacterDetail'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Register from './pages/Register/Register'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path=""
      element={<App />}
    >
      <Route
        path={URLS.LOGIN}
        element={<Login />}
      />
      <Route
        path={URLS.REGISTER}
        element={<Register />}
      />
      <Route element={<AuthenticatedRoute />}>
        <Route
          path={URLS.CHARACTERS_CATALOGUE}
          element={<CharactersCatalogue />}
        />
        <Route
          path={URLS.CHARACTER_DETAIL}
          element={<CharacterDetail />}
        />
      </Route>
      <Route
        path={URLS.NOT_FOUND}
        element={<ErrorPage />}
      />
    </Route>
  )
)

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
