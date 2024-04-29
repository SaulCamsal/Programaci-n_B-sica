import { PokeItem } from "../models/pokemons"

export function PokeList ({
    pokemons, 
    onClickDetails
}: {
    pokemons: PokeItem[]; 
    onClickDetails: (url:string) => void 
}){

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>URL</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    {pokemons.map((pokemon:PokeItem) => (
                        <tr key={pokemon.name}>
                            <td>{pokemon.name}</td>
                            <td>{pokemon.url}</td>
                            <td>
                                <button onClick={() => onClickDetails(pokemon.url)}>Detalles</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </>
    )
}