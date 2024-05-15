import { useState } from 'react'
import './App.css'
import { useCounterStore } from './store/counterStore'
import { ButtonInc } from './components/ButtonInc'

function App() {

 // const count = useCounterStore(state => state.count)
  const [count, setCount] = useState(0)
  return (
    <>
      <div >
        <h2>Contador: {count}</h2>
        <ButtonInc/>
      </div>
    </>
  )
}

export default App
