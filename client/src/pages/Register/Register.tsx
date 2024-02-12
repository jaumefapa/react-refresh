import { Navigate } from 'react-router-dom'

import { URLS } from '../../constants'
import { useAppSelector } from '../../redux/hooks'
import EntryCard from '../../modules/common/EntryCard/EntryCard'
import RegisterForm from '../../modules/Register/RegisterForm'

export default function Register() {
  const { success } = useAppSelector(state => state.auth)

  return success ? (
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
