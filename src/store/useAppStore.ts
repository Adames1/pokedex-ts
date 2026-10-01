import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { type PokemonsSlicesType, createPokemonSlice } from "./pokemonSlice"

export const useAppStore = create<PokemonsSlicesType>()(devtools((...a) => ({
    ...createPokemonSlice(...a)
})))