import z from "zod"

export const ResultsAPISchema = z.object({
    results: z.array(
        z.object({
            url: z.string().url()
        })
    )
})

export const PokemonAPISchema = z.object({
    name: z.string(),
    id: z.number(),
    sprites: z.object({
        front_default: z.string().url(),
        versions: z.object({
            'generation-v': z.object({
                'black-white': z.object({
                    'animated': z.object({
                        front_default: z.string().url(),
                    })
                })
            })

        })
    })
})

export const PokemonsAPISchema = z.array(PokemonAPISchema)