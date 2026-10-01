import { formatStatNamePokemon, normalizeMetrics } from "../helpers";
import type { PokemonDetails } from "../types";
import TypeBadge from "./TypeBadge";
import { TYPE_STYLES } from "../helpers";

type PokemonDetailsProps = {
  selectedPokemon: PokemonDetails;
};

export default function PokemonDetails({
  selectedPokemon,
}: PokemonDetailsProps) {
  const style = TYPE_STYLES[selectedPokemon.types[0].type.name] ?? {
    bg: "#E5E7EB",
    color: "#374151",
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5">
      {/* basic information pokemon */}
      <div
        className="w-full rounded-2xl flex flex-col items-center justify-center py-5"
        style={{ background: style.bg }}
      >
        <div className="relative flex items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute h-36 w-36 rounded-full bg-white/45"
          />
          <img
            src={selectedPokemon.sprites.front_default}
            alt={selectedPokemon.name}
            className="relative w-30 h-30 mx-auto object-contain"
          />
        </div>

        <span
          className="mt-1 text-xs opacity-75"
          style={{ color: style.color }}
        >{`#${selectedPokemon.id.toString().padStart(3, "0")}`}</span>

        <h2
          className="text-lg capitalize font-semibold -mt-1"
          style={{ color: style.color }}
        >
          {selectedPokemon.name}
        </h2>

        <div className="flex gap-1.5 mt-2">
          {selectedPokemon.types.map((type) => (
            <TypeBadge key={type.slot} type={type} />
          ))}
        </div>
      </div>

      {/* abilities pokemon */}
      <div className="w-full space-y-3">
        <h3 className="uppercase text-xs font-semibold text-slate-600 tracking-wider text-center">
          Abilities
        </h3>

        <div className="flex flex-wrap justify-center gap-2">
          {selectedPokemon.abilities.map((ability) => (
            <div
              key={ability.slot}
              className="capitalize text-xs font-semibold text-slate-800 bg-slate-50 border-[1.5px] border-slate-300 px-3.5 py-1 rounded-full"
              style={
                ability.is_hidden
                  ? { backgroundColor: "#ffe3e3", borderColor: "#ff4343" }
                  : {}
              }
            >
              {ability.ability.name}
            </div>
          ))}
        </div>
      </div>

      {/* height and weight */}
      <div className="flex gap-3 w-full text-center">
        <div className="bg-slate-50 border border-slate-100 w-full py-2 rounded-xl flex flex-col items-center gap-0.5">
          <h3 className="uppercase text-xs text-slate-500 tracking-wider">
            Height
          </h3>
          <span className="text-xs font-semibold text-slate-800">
            {`${normalizeMetrics(selectedPokemon.height)}m`}
          </span>
        </div>

        <div className="bg-gray-100 w-full py-2 rounded-xl">
          <h3 className="uppercase text-xs text-slate-500 tracking-wider">
            Wieght
          </h3>
          <span className="text-xs font-semibold text-slate-800">
            {`${normalizeMetrics(selectedPokemon.weight)}kg`}
          </span>
        </div>
      </div>

      {/* stats pokemon */}
      <div className="w-full text-center space-y-2">
        <h3 className="uppercase text-xs font-semibold text-slate-600 tracking-wider">
          Stats
        </h3>

        <div className="w-full flex flex-col justify-center gap-1.5">
          {selectedPokemon.stats.map((stat, index) => (
            <div
              key={index}
              className="grid grid-cols-[2.25rem_1.75rem_1fr] items-center gap-2"
            >
              <h4 className="uppercase text-xs font-medium text-slate-600 text-left">
                {formatStatNamePokemon(stat.stat.name).text}
              </h4>

              <span className="font-semibold text-slate-800 text-xs text-right tabular-nums">
                {stat.base_stat}
              </span>

              {/* progress bar stats */}
              <div className="relative w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 h-full rounded-full opacity-70"
                  style={{
                    width: `${Math.min(100, (stat.base_stat / 150) * 100)}%`,
                    background: style.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
