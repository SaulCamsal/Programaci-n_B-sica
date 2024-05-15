import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Card } from './componments/Card'

function App() {

  return (
    <>
      <div className='container text-center'>
        <main id='content' className='row'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </main>
      </div>
    </>
  )
}

export default App
