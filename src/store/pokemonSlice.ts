import type { StateCreator } from "zustand"
import { getPokemonById, getPokemons, getPokemonByName } from "../services/pokemon-services"
import type { Pokemon, PokemonDetails, Pokemons } from "../types"

export type PokemonsSlicesType = {
    pokemons: Pokemons
    searchResults: Pokemons
    selectedPokemon: PokemonDetails
    showPanel: boolean
    isLoadingList: boolean
    isLoadingDetails: boolean
    isSearching: boolean
    error: string | null
    fetchPokemons: (rateLimit: string) => Promise<void>
    selectPokemon: (id: Pokemon["id"]) => Promise<void>
    searchPokemon: (name: Pokemon["name"]) => Promise<void>
    closePanel: () => void

}

export const createPokemonSlice: StateCreator<PokemonsSlicesType> = (set) => ({
    pokemons: [],
    searchResults: [],
    selectedPokemon: {} as PokemonDetails,
    showPanel: false,
    isLoadingList: false,
    isLoadingDetails: false,
    isSearching: false,
    error: null,

    fetchPokemons: async (rateLimit) => {
        set({ isLoadingList: true, error: null })
        try {
            const pokemons = await getPokemons(rateLimit)
            set({ pokemons })
        } catch (error) {
            console.log(error)
        } finally {
            set({ isLoadingList: false })
        }
    },
    selectPokemon: async (id) => {
        set({ showPanel: true, isLoadingDetails: true, error: null })
        try {
            const selectedPokemon = await getPokemonById(id)
            set({ selectedPokemon })
        } catch {
            set({ error: "No se pudo cargar el detalle del Pokémon" })
        } finally {
            set({ isLoadingDetails: false })
        }
    },
    searchPokemon: async (name) => {
        if (!name.trim()) {
            set({ searchResults: [], isSearching: false })
            return
        }
        set({ isSearching: true })
        try {
            const pokemon = await getPokemonByName(name)
            set({ searchResults: pokemon ? [pokemon] : [] })
        } catch {
            set({ searchResults: [] })
        } finally {
            set({ isSearching: false })
        }
    },
    closePanel: () => {
        set({ showPanel: false })
    }
})