import { Link } from 'react-router-dom'
import { URLS } from '../../constants'
import './errorPage.css'

export default function ErrorPage() {
  return (
    <div className="error-page-container">
      <h1>Mmmm, it looks like there's nothing here!</h1>
      <div className="error-page-redirect-sub">
        <p>Go back to:</p>
        <Link to="/">Login</Link>
        <Link to={URLS.CHARACTERS_CATALOGUE}>List of characters</Link>
      </div>
      <p>Psst! Not all who wander are lost ;)</p>
    </div>
  )
}
