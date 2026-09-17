import axios from "axios"
import { PokemonsAPISchema, ResultsAPISchema, PokemmonDetailsAPISchema } from "../utils/pokemon-schema"
import type { Pokemon } from "../types"

export async function getPokemons() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0"
    const response = await axios(url)
    const results = ResultsAPISchema.safeParse(response.data)

    if (results.success) {
        const promises = results.data.results.map(pokemon => axios(pokemon.url))
        const pokemonsData = await Promise.all(promises)
        const pokemonsResults = pokemonsData.map(pokemon => pokemon.data)
        const pokemons = PokemonsAPISchema.safeParse(pokemonsResults)
        console.log(pokemonsResults)
        return pokemons.data
    }
}

export async function getPokemonById(id: Pokemon["id"]) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const { data } = await axios(url)
    const results = PokemmonDetailsAPISchema.safeParse(data)
    console.log(results.data)

    if (results.success) {
        return results.data
    }

}