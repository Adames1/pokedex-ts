const STAT_STYLES: Record<string, { bg: string; text: string }> = {
    hp: { bg: "red", text: "HP" },
    attack: { bg: "blue", text: "ATK" },
    defense: { bg: "green", text: "DEF" },
    "special-attack": { bg: "purple", text: "SP" },
    "special-defense": { bg: "pink", text: "SD" },
    speed: { bg: "orange", text: "SPD" },
}

export type TypeStyle = {
    bg: string     // fondo pastel de la card
    color: string  // tono oscuro: número, nombre y texto del badge
    label: string  // nombre a mostrar
}

export const TYPE_STYLES: Record<string, TypeStyle> = {
    normal: { bg: "#E4E4D6", color: "#4A4A3A", label: "Normal" },
    fire: { bg: "#FBCFC4", color: "#7A2E1E", label: "Fuego" },
    water: { bg: "#C9DDF7", color: "#1E3A5F", label: "Agua" },
    electric: { bg: "#FBEFB0", color: "#7A5F00", label: "Eléctrico" },
    grass: { bg: "#C8EBD3", color: "#1F5D3A", label: "Planta" },
    ice: { bg: "#CDEEEC", color: "#1D5F5C", label: "Hielo" },
    fighting: { bg: "#F2C4C1", color: "#7A1F1B", label: "Lucha" },
    poison: { bg: "#E6CBE5", color: "#5B1F59", label: "Veneno" },
    ground: { bg: "#F1E0B8", color: "#6B4E12", label: "Tierra" },
    flying: { bg: "#DDD5F8", color: "#45368A", label: "Volador" },
    psychic: { bg: "#FCCADA", color: "#8A1F47", label: "Psíquico" },
    bug: { bg: "#DDE9A8", color: "#4D5A0A", label: "Bicho" },
    rock: { bg: "#E2D9A6", color: "#5F5215", label: "Roca" },
    ghost: { bg: "#D5C9E6", color: "#3F2E62", label: "Fantasma" },
    dragon: { bg: "#D2C2FA", color: "#34188F", label: "Dragón" },
    dark: { bg: "#D3C3B8", color: "#3B2C22", label: "Siniestro" },
    steel: { bg: "#DADAE6", color: "#3F3F5A", label: "Acero" },
    fairy: { bg: "#F4D3E3", color: "#7A3358", label: "Hada" },
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