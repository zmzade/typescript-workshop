export interface PokemonType {
    slot: number
    type: { name: string }
}

export interface Stat {
    stat: { name: string }
    base_stat: number
}

export interface Pokemon {
    name: string
    sprites: { front_default: string }
    types: PokemonType[]
    stats: Stat[]
}
