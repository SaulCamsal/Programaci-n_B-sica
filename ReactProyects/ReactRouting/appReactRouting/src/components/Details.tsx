import { Link, useLoaderData, useRouteLoaderData } from 'react-router-dom'
import '../App.css'

export function Details(){
    
    const name = useLoaderData()
    
    return(
        <>
            <form>
                 Nombre:
                <input></input>
                 Apellido:
                <input></input>
            </form>
            <hr></hr>
            <button><Link to={"/list"}>Back</Link></button>
        </>

    )
}


export async function loader({params}:any){
    //Toda la logica de programacion aqui
    return params.name
}