import { useFetch } from './use-fetch'
import { Pokemon } from 'pokedex-promise-v2'
//srting | null
export function usePokemon(pokemonName: string) {
    const {
        data: pokemon,
        loading,
        error,
    } = useFetch<Pokemon>(
        pokemonName ? `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}` : null
    )

    return { pokemon, loading, error }
}
