import type { StateCreator } from "zustand"
import { getPokemonById, getPokemons, getPokemonByName } from "../services/pokemon-services"
import type { Pokemon, PokemonDetails, Pokemons } from "../types"

export type PokemonsSlicesType = {
    pokemons: Pokemons
    selectedPokemon: PokemonDetails
    fetchPokemons: () => Promise<void>
    selectPokemon: (id: Pokemon["id"]) => void
    searchPokemon: (name: Pokemon["name"]) => Promise<void>
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
    searchPokemon: async (name) => {
        const pokemon = await getPokemonByName(name)
        if (pokemon) {
            set({
                pokemons: [pokemon]
            })
        }
    },
    closePanel: () => {
        set({
            showPanel: false
        })
    }
})