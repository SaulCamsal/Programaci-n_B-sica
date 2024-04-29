
import './App.css'
import { useCounterStore } from './store/counterStore'

function App() {

  const count = useCounterStore(state => state.count)
  

  return (
    <>
      <h2>
      Contador: {count}
      
      </h2>
    </>
  )
}

export default App
