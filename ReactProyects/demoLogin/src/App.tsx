
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from '@mui/icons-material'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element = {<Login/>}/>
        <Route path="/admin" element = {<Login/>}/>
      </Routes>
      <Login></Login>
    </>
  )
}

export default App
