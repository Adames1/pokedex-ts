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
    }),
    types: z.array(
        z.object({
            slot: z.number(),
            type: z.object({
                name: z.string(),
            })
        })
    )
})

export const PokemonsAPISchema = z.array(PokemonAPISchema)

export const PokemmonDetailsAPISchema = z.object({
    id: z.number(),
    name: z.string(),
    sprites: z.object({
        front_default: z.string().url(),
    }),
    types: z.array(
        z.object({
            slot: z.number(),
            type: z.object({
                name: z.string(),
            })
        })
    ),
    abilities: z.array(
        z.object({
            is_hidden: z.boolean(),
            slot: z.number(),
            ability: z.object({
                name: z.string()
            })
        })
    ),
    height: z.number(),
    weight: z.number(),
    base_experience: z.number(),
    stats: z.array(
        z.object({
            base_stat: z.number(),
            stat: z.object({
                name: z.string()
            })
        })
    )
})