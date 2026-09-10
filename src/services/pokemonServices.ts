import axios from "axios"
import { PokemonsAPIListSchema, ResultsAPIResponseSchema } from "../utils/pokemonSchema"

export async function getPokemons() {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`
    const { data } = await axios(url)
    const result = ResultsAPIResponseSchema.safeParse(data)

    if (result.success) {
        const promises = result.data.results.map(pokemon => axios(pokemon.url))
        const pokemonsResults = await Promise.all(promises)
        const pokemonsData = pokemonsResults.map(res => res.data)
        const pokemons = PokemonsAPIListSchema.safeParse(pokemonsData)

        console.log(pokemons.data)
    }
}