import './loadingBar.css'

export default function LoadingBar() {
  return (
    <div className="loadingBar-container">
      <div className="loadingBar-progress-infinite">
        <div className="loadingBar-progress-bar"></div>
      </div>
    </div>
  )
}
