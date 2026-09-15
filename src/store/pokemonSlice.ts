import type { StateCreator } from "zustand"
import { getPokemons } from "../services/pokemon-services"
import type { Pokemons } from "../types"

export type PokemonsSlicesType = {
    pokemons: Pokemons
    fetchPokemons: () => Promise<void>
}

export const createPokemonSlice: StateCreator<PokemonsSlicesType> = (set) => ({
    pokemons: [],

    fetchPokemons: async () => {
        const pokemons = await getPokemons()
        set({
            pokemons
        })
    }
})