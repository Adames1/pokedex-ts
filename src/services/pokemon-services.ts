import axios from "axios"
import { PokemonsAPISchema, ResultsAPISchema } from "../utils/pokemon-schema"

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