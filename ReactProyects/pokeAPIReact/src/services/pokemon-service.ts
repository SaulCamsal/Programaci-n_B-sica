import { PokemonResponse } from "../models/pokemons"

const URL = "https://pokeapi.co/api/v2/pokemon/"

function getPokemons(){
    fetch(URL)
        .then((response) => response.json())
        .then((data: PokemonResponse) => {
            return data
        })
}