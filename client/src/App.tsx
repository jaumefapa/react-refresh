import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div
      id="my-id"
      className="App"
    >
      <Outlet />
    </div>
  )
}

export default App
