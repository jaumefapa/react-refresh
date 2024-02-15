import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { TOKEN_STORAGE_KEY, URLS } from '../../constants'
import { useAppSelector } from '../../redux/hooks'
import EntryCard from '../../modules/common/EntryCard/EntryCard'
import LoginForm from '../../modules/Login/LoginForm'

export default function Login() {
  const {
    success,
    userInfo: { token },
  } = useAppSelector(state => state.auth)
  const navigate = useNavigate()
  const alreadyAuthenticated = !!localStorage.getItem(TOKEN_STORAGE_KEY) || token;

  useEffect(() => {
    if (alreadyAuthenticated) navigate(URLS.CHARACTERS_CATALOGUE)
  }, [alreadyAuthenticated, navigate]);

  useEffect(() => {
    if (success) {
      localStorage.setItem(TOKEN_STORAGE_KEY, token)
      navigate(URLS.CHARACTERS_CATALOGUE)
    }
  }, [success, navigate, token])

  return (
    <>
      <EntryCard
        cardTitle="Welcome back!"
        footerMessage="Don't have an account yet?"
        footerLinkText="Register"
        footerLinkSendTo={URLS.REGISTER}
      >
        <LoginForm />
      </EntryCard>
      <Outlet />
    </>
  )
}
