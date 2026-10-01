import { useAppStore } from "../store/useAppStore";
import type { Pokemon } from "../types";
import TypeBadge from "./TypeBadge";
import { TYPE_STYLES } from "../helpers";

type PokemonCardProps = {
  pokemon: Pokemon;
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const selectPokemon = useAppStore((state) => state.selectPokemon);

  const style = TYPE_STYLES[pokemon.types[0].type.name] ?? {
    bg: "#E5E7EB",
    color: "#374151",
  };

  return (
    <div
      className="relative flex flex-col justify-between gap-10 p-4 overflow-hidden rounded-2xl cursor-pointer transition hover:-translate-y-0.5 hover:shadow-lg"
      style={{ backgroundColor: style.bg }}
      onClick={() => selectPokemon(pokemon.id)}
    >
      {/* Circulo decorativo detras del sprite: se recorta con overflow-hidden */}
      <div
        aria-hidden="true"
        className="absolute -right-2 -bottom-2 h-24 w-24 rounded-full bg-white/45 md:-right-3 md:-bottom-3 md:h-32 md:w-32"
      />

      <div className="relative z-10">
        <span
          className="text-xs opacity-75"
          style={{ color: style.color }}
        >{`#${pokemon.id.toString().padStart(3, "0")}`}</span>
        <h2
          className="text-sm md:text-base capitalize font-semibold -mt-1"
          style={{ color: style.color }}
        >
          {pokemon.name}
        </h2>
      </div>

      <div className="relative z-10 flex justify-between">
        <div className="flex flex-col gap-1.5">
          {pokemon.types.map((type) => (
            <TypeBadge key={type.slot} type={type} />
          ))}
        </div>

        <div>
          <img
            src={
              pokemon.sprites.versions["generation-v"]["black-white"].animated
                .front_default
            }
            alt={pokemon.name}
            className="w-12 h-12 md:w-18 md:h-18 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
