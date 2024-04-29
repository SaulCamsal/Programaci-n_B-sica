import { useEffect, useState } from "react";
import { PokeDetails } from "../components/PokeDetails";
import { PokeList } from "../components/PokeList";
import { PokeItem, Pokemon, PokemonResponse } from "../models/pokemons";

const URL = "https://pokeapi.co/api/v2/pokemon/"

function getPokemons(){
    fetch(URL)
        .then((response) => response.json())
        .then((data: PokemonResponse) => {
            return data
        })
}

export function PokeApi(){
    const [selectedURL, setselectedURL] = useState<string>("")
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
    const [pokemons, setPokemons] = useState<PokeItem[]>([])
    //Usar UseEffect para recargar solo lo que tiene dentro de si y UseState para recargar tooooda la pag
    //cuando la dependencia ( lo que va entre corchetes al final) va vacia se carga una sola vez l componente
    //caso contrario se cargara cada vez que lo que haya en la dependecia cambie
    useEffect(() => {
        getPokemons().then((data) => {
            setPokemons(data.results)
        })
    }, [])

    useEffect(()=>{
        console.log("UseEffect ejecutado :D")
        if(selectedURL){
            fetch(selectedURL)
            .then((response) => response.json())
            .then((data: Pokemon) => {
            //setPokemons(data.results)
            setSelectedPokemon(data)
        })
        }
    }, [selectedURL])

    const handleClickDetails = (url:string) =>{
        setselectedURL(url)
    }

    return(
        <div>
            <h1>PokeApi</h1>
            <div className="poke-api-table">
                <PokeList pokemons={pokemons} onClickDetails={handleClickDetails}/>
            </div>
            {selectedURL && selectedPokemon ? (
            <>
                <PokeDetails pokemon={selectedPokemon} /> 
                <button onClick={()=> setSelectedPokemon}>Cerrar</button>
            </>
            ) : null}
            
        </div>
    )
}