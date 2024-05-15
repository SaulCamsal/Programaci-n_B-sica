
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
      <h1>Main Page</h1>
      <Link to={"/list"}>Go to list</Link>
    </>
  )
}

export default App
