import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { registerUser } from '../../redux/features/auth/authActions'

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export default function RegisterForm() {
  const [state, setState] = useState(initialState)
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector(state => state.auth)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (state.password !== state.confirmPassword) {
      alert('Password mismatch')
    }

    setState(prevState => ({ ...prevState, email: state.email.toLowerCase() }))

    dispatch(
      registerUser({
        username: state.username,
        email: state.email,
        password: state.password,
      })
    )
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setState(prevState => ({ ...prevState, [name]: value }))
  }

  const validateForm = () => {
    // TODO: Add proper form validation with 3rd party library
    return (
      !state.username ||
      !state.email ||
      !state.password ||
      !state.confirmPassword
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Type your username"
          value={state.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Type your email"
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Type your password"
          value={state.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Type your password again"
          value={state.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="button"
        disabled={validateForm() || loading}
      >
        {loading ? 'Loading...' : 'Register'}
      </button>
      {/* TODO: Show proper error message */}
      {error && <p>{error}</p>}
    </form>
  )
}
