import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { loginUser } from '../../redux/features/auth/authActions'

const initialState = {
  email: '',
  password: '',
}

export default function LoginForm() {
  const [state, setState] = useState(initialState)
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector(state => state.auth)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { email, password } = state
    const user = { email: email.toLocaleLowerCase(), password }

    dispatch(loginUser(user))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setState(prevState => ({ ...prevState, [name]: value }))
  }

  const validateForm = () => {
    // TODO: Add proper form validation with 3rd party library
    return !state.email || !state.password
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          placeholder="Type your email"
          name="email"
          value={state.email}
          onChange={handleChange}
          autoFocus
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          placeholder="Type your password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
      </label>
      <button
        className="login-page-form-button"
        type="submit"
        value="login"
        disabled={validateForm() || loading}
      >
        {loading ? 'Validating...' : 'Log in'}
      </button>
      {/* TODO: Show proper error message */}
      {error && <p>{error}</p>}
    </form>
  )
}
