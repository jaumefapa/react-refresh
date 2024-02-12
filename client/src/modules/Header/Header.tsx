import { ReactNode } from 'react'
import './header.css'

export default function Header({ children }: { children: ReactNode }) {
  return (
    <div className="auth-header-container">
      <img
        src="/images/logo-rick-and-morty.png"
        alt="Rick and Morty logo"
        style={{
          height: '40px',
        }}
      />
      {children}
    </div>
  )
}
