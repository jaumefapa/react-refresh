import { Link } from 'react-router-dom'
import './entryCard.css'

function Header({ cardTitle }: { cardTitle: string }) {
  return (
    <div className="entryCard-form-header">
      <p>{cardTitle}</p>
    </div>
  )
}

function Footer({
  message,
  linkText,
  linkSendTo,
}: {
  message: string
  linkText: string
  linkSendTo: string
}) {
  return (
    <div className="entryCard-register-sub">
      <p>{message}</p>
      <Link to={linkSendTo}>{linkText}</Link>
    </div>
  )
}

export default function EntryCard({
  cardTitle,
  footerMessage,
  footerLinkText,
  footerLinkSendTo,
  children,
}: {
  cardTitle: string
  footerMessage: string
  footerLinkText: string
  footerLinkSendTo: string
  children: React.ReactNode
}) {
  return (
    <div className="entryCard-container">
      <Header cardTitle={cardTitle} />
      {children}
      <Footer
        message={footerMessage}
        linkText={footerLinkText}
        linkSendTo={footerLinkSendTo}
      />
    </div>
  )
}
