import type { Pokemon } from "../types";

type TypeBadgeProps = {
  type: Pokemon["types"][0];
};

const TYPE_STYLES: Record<string, { bg: string; text: string }> = {
  normal: { bg: "#E5E4D6", text: "#6B6B4F" },
  fire: { bg: "#FDBA74", text: "#9A3412" },
  water: { bg: "#A5C4F5", text: "#1E3A8A" },
  electric: { bg: "#FDE68A", text: "#92610A" },
  grass: { bg: "#86EFAC", text: "#166534" },
  ice: { bg: "#BAE6FD", text: "#0C4A6E" },
  fighting: { bg: "#F87171", text: "#FFFFFF" },
  poison: { bg: "#D8B4FE", text: "#6B21A8" },
  ground: { bg: "#F0C987", text: "#7C4A03" },
  flying: { bg: "#C7D2FE", text: "#3730A3" },
  psychic: { bg: "#F9A8D4", text: "#9D174D" },
  bug: { bg: "#BEF264", text: "#3F6212" },
  rock: { bg: "#D6C9A1", text: "#5C4A21" },
  ghost: { bg: "#A78BFA", text: "#FFFFFF" },
  dragon: { bg: "#818CF8", text: "#FFFFFF" },
  dark: { bg: "#57534E", text: "#FFFFFF" },
  steel: { bg: "#D6D6E0", text: "#3F3F5C" },
  fairy: { bg: "#FBCFE8", text: "#9D174D" },
};

export default function TypeBadge({ type }: TypeBadgeProps) {
  const style = TYPE_STYLES[type.type.name] ?? {
    bg: "#E5E7EB",
    text: "#374151",
  };

  return (
    <span
      className="bg-slate-400 px-3 py-1.5 uppercase rounded-md text-xs font-bold tracking-wide"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {type.type.name}
    </span>
  );
}
