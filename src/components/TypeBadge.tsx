import type { Pokemon } from "../types";
import { TYPE_STYLES } from "../helpers";

type TypeBadgeProps = {
  type: Pokemon["types"][0];
};

export default function TypeBadge({ type }: TypeBadgeProps) {
  const style = TYPE_STYLES[type.type.name] ?? {
    bg: "#E5E7EB",
    color: "#374151",
  };

  return (
    <span
      className="bg-white/70 max-w-max px-2.5 py-0.5 uppercase rounded-full text-[11px] font-semibold tracking-wide"
      style={{ color: style.color }}
    >
      {type.type.name}
    </span>
  );
}
