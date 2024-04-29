import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [random, setRandom] = useState<[]>([])

  useEffect(() => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return 
  }, [setRandom])

  return (
    <>
      <h1>Random numbers</h1>
      <div className="card">
        <button onClick={()=> setRandom((random) => ) }>
          Generar 
        </button>
        <p>try: {count}</p>
        
      </div>
      <p >
        Number 1 =  random
      </p>
      <p >
        Number 1 =  random
      </p>
    </>
  )
}

export default App
