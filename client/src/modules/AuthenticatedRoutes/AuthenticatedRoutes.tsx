import { Navigate, Outlet } from 'react-router-dom'
import { TOKEN_STORAGE_KEY, URLS } from '../../constants/index'
import { useAppSelector, useResetState } from '../../redux/hooks'
import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Button from '../common/Button/Button'

const AuthenticatedRoute = () => {
  const [authenticated, setAuthenticated] = useState(
    !!localStorage.getItem(TOKEN_STORAGE_KEY)
  )
  const { userInfo, loading } = useAppSelector(state => state.auth)
  const resetStates = useResetState()

  const logout = () => {
    setAuthenticated(false)
    localStorage.removeItem(TOKEN_STORAGE_KEY)
    resetStates()
  }

  useEffect(() => {
    if (userInfo.token) {
      setAuthenticated(true)
    } else if (localStorage.getItem(TOKEN_STORAGE_KEY)) {
      setAuthenticated(true)
    } else {
      setAuthenticated(false)
    }

    return () => {
      resetStates()
      localStorage.removeItem(TOKEN_STORAGE_KEY)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo.token])

  if (loading) return <p>Loading...</p>

  return authenticated ? (
    <>
      <Header>
        <Button
          handleClick={() => logout()}
          text={'Logout'}
        />
      </Header>
      <Outlet />
    </>
  ) : (
    <Navigate to={URLS.LOGIN} />
  )
}

export default AuthenticatedRoute
