import z from "zod"
import { PokemonAPIListSchema, PokemonsAPIListSchema, ResultsAPIResponseSchema } from "../utils/pokemonSchema"

export type ResultsAPIResponse = z.infer<typeof ResultsAPIResponseSchema>
export type Pokemons = z.infer<typeof PokemonsAPIListSchema>;
export type Pokemon = z.infer<typeof PokemonAPIListSchema>