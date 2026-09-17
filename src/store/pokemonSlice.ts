import type { StateCreator } from "zustand"
import { getPokemonById, getPokemons } from "../services/pokemon-services"
import type { Pokemon, PokemonDetails, Pokemons } from "../types"

export type PokemonsSlicesType = {
    pokemons: Pokemons
    selectedPokemon: PokemonDetails
    fetchPokemons: () => Promise<void>
    selectPokemon: (id: Pokemon["id"]) => void
    showPanel: boolean
    closePanel: () => void

}

export const createPokemonSlice: StateCreator<PokemonsSlicesType> = (set) => ({
    pokemons: [],
    selectedPokemon: {} as PokemonDetails,
    showPanel: false,

    fetchPokemons: async () => {
        const pokemons = await getPokemons()
        set({
            pokemons
        })
    },
    selectPokemon: async (id) => {
        const selectedPokemon = await getPokemonById(id)
        set({
            selectedPokemon,
            showPanel: true
        })
    },
    closePanel: () => {
        set({
            showPanel: false
        })
    }
})