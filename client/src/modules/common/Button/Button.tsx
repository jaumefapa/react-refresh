import './button.css'

export default function Button({
  handleClick,
  text,
}: {
  handleClick: () => void
  text: string
}) {
  return (
    <button
      className="button-component"
      onClick={handleClick}
    >
      {text}
    </button>
  )
}
