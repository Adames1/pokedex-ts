import { z } from "zod"

export const ResultsAPIResponseSchema = z.object({
    results: z.array(
        z.object({
            name: z.string(),
            url: z.string().url()
        })
    )
})

export const PokemonAPIListSchema = z.object({
    name: z.string(),
    id: z.number(),
    sprites: z.object({
        front_default: z.string().url()
    }),
})

export const PokemonsAPIListSchema = z.array(PokemonAPIListSchema)