import z from "zod"
import { ResultsAPISchema, PokemonAPISchema, PokemonsAPISchema, PokemmonDetailsAPISchema } from "../utils/pokemon-schema"

export type Results = z.infer<typeof ResultsAPISchema>
export type Pokemons = z.infer<typeof PokemonsAPISchema>
export type Pokemon = z.infer<typeof PokemonAPISchema>
export type PokemonDetails = z.infer<typeof PokemmonDetailsAPISchema>