import { Ability, Pokemon } from "../models/pokemons";


export function PokeDetails ({pokemon}: { pokemon: Pokemon}){

    return(
        <div className="pokemon-details">
            <h2>{pokemon.name}</h2>
            <hr/>
            <div className="main-description">
                <span>Height : {pokemon.height}</span>
                <span>Weight : {pokemon.weight}</span>
                <span>Base Experience: {pokemon.base_experience}</span>
            </div>
            <hr/>
            <h3>Abilities:</h3>
            <div className="main-description">
                {pokemon.abilities.map((ability: Ability, index ) => (
                    <span key={index}> {ability.name}</span>
                ))}
            </div>

        </div>
    )
}