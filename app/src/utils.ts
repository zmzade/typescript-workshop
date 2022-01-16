//import { Pokemon, PokemonStat } from 'pokedex-promise-v2'
//import {Pokemon, Stat} from "./Types"
//Pokemon:Pokemon
export const getPokemonName = (pokemon: { name: string }) => pokemon.name

export const getStatBaseValue = (pokemonStat: { base_stat: number }) => pokemonStat.base_stat
//PokemonStat:PokemonStat
export const getStatName = (pokemonStat: { stat: { name: string } }) => pokemonStat.stat.name

export const getPrimaryType = (pokemon: { types: { slot: number; type: { name: string } }[] }) => {
    const types = pokemon.types

    const primaryType = types.find((pokemonType) => pokemonType.slot === 1)

    if (primaryType) {
        return primaryType.type.name
    } else {
        return 'Unknown'
    }
}
