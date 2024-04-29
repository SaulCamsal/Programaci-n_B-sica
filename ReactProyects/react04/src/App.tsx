import 'bootstrap/dist/css/bootstrap.css'

import './App.css'
import Post from './components/Post'
import AddPost from './components/AddPost'
import { useState } from 'react'

function App() {


  let newArrCard = [{}, {}, {}]

  const [cards, setCards] = useState(newArrCard)
/*
  function buttonClickHandler() {
    let newArr = cards.filter(x => true)
    newArr.push({ "titulo": ("Otro titulo"+newArr.length)})
    setCards(newArr)
  }*/

  function actualizarValores(t,d){
    let newArr = cards.filter(x => true)
    newArr.push({ "titulo": t, "description" : d})
    setCards(newArr)
  }

  return (
    <>
      <div className="container text-center">
        <div className="row">
          {cards.map( card => (
              <div className="col">
                <Post titulo={(card.titulo)} description= "Descripcion generica juasjuas"></Post>
              </div>))}
        </div>
        <AddPost onAgregarPostChange = {actualizarValores}></AddPost>
      </div>
      <button onClick={buttonClickHandler}>Add</button>



      {/*   Codigo con container
      <div className='container'>
        <main id="content">
          <ul className="list-group list-group-horizontal">
            {cards.map( card => (
              <li className="list-group-item">
                <Post titulo="titulo random " description= "Secripcion generica juasjuas"></Post>
              </li>))}
          </ul>

          <AddPost></AddPost>
        </main>
        <button onClick={buttonClickHandler}>Add</button>
      </div>
            */}

    </>
  )
}

export default App
