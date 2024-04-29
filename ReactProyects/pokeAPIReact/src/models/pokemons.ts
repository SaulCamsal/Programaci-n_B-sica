export interface PokemonResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokeItem[];
  }
  
  export interface PokeItem {
    name: string;
    url: string;
  }

  export interface Pokemon{
    name: string
    id: number
    weight: number
    height: number
    abilities: Ability[]
    base_experience: number
}

export interface Ability{
    name: string
    url: string
}