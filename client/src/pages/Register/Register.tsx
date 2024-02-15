import { Navigate } from 'react-router-dom'

import { TOKEN_STORAGE_KEY, URLS } from '../../constants'
import { useAppSelector } from '../../redux/hooks'
import EntryCard from '../../modules/common/EntryCard/EntryCard'
import RegisterForm from '../../modules/Register/RegisterForm'

export default function Register() {
  const { success, userInfo: { token } } = useAppSelector(state => state.auth)
  const alreadyAuthenticated = !!localStorage.getItem(TOKEN_STORAGE_KEY) || token;

  return success || alreadyAuthenticated ? (
    <Navigate to={`../${URLS.CHARACTERS_CATALOGUE}`} />
  ) : (
    <>
      <EntryCard
        cardTitle="Welcome!"
        footerMessage="Already have an account?"
        footerLinkText="Login"
        footerLinkSendTo={'../'}
      >
        <RegisterForm />
      </EntryCard>
    </>
  )
}
