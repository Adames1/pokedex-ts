const STAT_STYLES: Record<string, { bg: string; text: string }> = {
    hp: { bg: "red", text: "HP" },
    attack: { bg: "blue", text: "ATK" },
    defense: { bg: "green", text: "DEF" },
    "special-attack": { bg: "purple", text: "SP" },
    "special-defense": { bg: "pink", text: "SD" },
    speed: { bg: "orange", text: "SPD" },
}

export const formatStatNamePokemon = (nameStat: string) => {
    const style = STAT_STYLES[nameStat] ?? {
        bg: "#E5E7EB",
        text: "#374151",
    };
    return style
}

export const normalizeMetrics = (value: number) => {
    return value / 10
}