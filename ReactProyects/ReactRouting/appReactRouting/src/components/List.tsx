import { Link } from 'react-router-dom'
import '../App.css'

export function List(){
    return(
        <>
            <ul>
                <li><Link to ="/details/dehya">Dehya</Link></li>
                <li><Link to ="/details/diluc">Diluc</Link></li>
                <li><Link to ="/details/xinyan">Xinyan</Link></li>
                <li><Link to ="/details/arlecchino">Arlecchio</Link></li>
                <li><Link to ="/details/bennett">Bennett</Link></li>
            </ul>
            <a></a>
            <hr></hr>
            <button><Link to={"/"}>Back to menu</Link></button>
        </>
    )
}
