import type { StateCreator } from "zustand"
import { getPokemonById, getPokemons, getPokemonByName } from "../services/pokemon-services"
import type { Pokemon, PokemonDetails, Pokemons } from "../types"

export type PokemonsSlicesType = {
    pokemons: Pokemons
    searchResults: Pokemons
    selectedPokemon: PokemonDetails
    fetchPokemons: (rateLimit: string) => Promise<void>
    selectPokemon: (id: Pokemon["id"]) => void
    searchPokemon: (name: Pokemon["name"]) => Promise<void>
    showPanel: boolean
    closePanel: () => void

}

export const createPokemonSlice: StateCreator<PokemonsSlicesType> = (set) => ({
    pokemons: [],
    searchResults: [],
    selectedPokemon: {} as PokemonDetails,
    showPanel: false,

    fetchPokemons: async (rateLimit) => {
        const pokemons = await getPokemons(rateLimit)
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
                searchResults: [pokemon]
            })
        }
    },
    closePanel: () => {
        set({
            showPanel: false
        })
    }
})