import { formatStatNamePokemon, normalizeMetrics } from "../helpers";
import type { PokemonDetails } from "../types";
import TypeBadge from "./TypeBadge";

type PokemonDetailsProps = {
  selectedPokemon: PokemonDetails;
};

export default function PokemonDetails({
  selectedPokemon,
}: PokemonDetailsProps) {
  return (
    <div className="text-center space-y-3">
      {/* sprites pokemon */}
      <img
        src={selectedPokemon.sprites.front_default}
        alt={selectedPokemon.name}
        className="w-20 h-20 mx-auto object-contain"
      />

      {/* number/id pokemon */}
      <span className="text-xs font-semibold text-gray-400">{`N° ${selectedPokemon.id}`}</span>

      {/* nombre pokemon */}
      <h2 className="text-lg font-extrabold text-slate-800 capitalize">
        {selectedPokemon.name}
      </h2>

      {/* tyipos pokemon */}
      <div className="flex flex-col gap-2 justify-center md:flex-row">
        {selectedPokemon.types.map((type) => (
          <TypeBadge key={type.slot} type={type} />
        ))}
      </div>

      {/* habilidades pokemon */}
      <div className="mt-8 space-y-3">
        <h3 className="uppercase text-sm font-extrabold text-slate-900 tracking-wider">
          Abilities
        </h3>
        <div className="flex gap-2 justify-center">
          {selectedPokemon.abilities.map((ability) => (
            <div
              key={ability.slot}
              className="capitalize text-xs font-bold text-slate-800 bg-slate-50 border-[1.5px] border-slate-300 px-4 py-1 rounded-xl"
              style={
                ability.is_hidden
                  ? { backgroundColor: "#ffe3e3", borderColor: "#ff4343" }
                  : {}
              }
            >
              {ability.ability["name"]}
            </div>
          ))}
        </div>
      </div>

      {/* altura y peso */}
      <div className="flex gap-4 items-center justify-center mt-8">
        <div className="space-y-2">
          <h3 className="uppercase text-sm font-extrabold text-slate-900 tracking-wider">
            Height
          </h3>
          <span className="text-xs font-bold">
            {`${normalizeMetrics(selectedPokemon.height)}m`}
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="uppercase text-sm font-extrabold text-slate-900 tracking-wider">
            Wieght
          </h3>
          <span className="text-xs font-bold">
            {`${normalizeMetrics(selectedPokemon.weight)}kg`}
          </span>
        </div>
      </div>

      {/* estadisticas pokemon */}
      <div className="mt-8 space-y-3">
        <h3 className="uppercase text-sm font-extrabold text-slate-900 tracking-wider">
          Stats
        </h3>

        <div className="flex gap-5 justify-center">
          {selectedPokemon.stats.map((stat, index) => (
            <div key={index}>
              <div
                className="text-white text-[8px] font-semibold w-6 h-6 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: formatStatNamePokemon(stat.stat.name).bg,
                }}
              >
                {formatStatNamePokemon(stat.stat.name).text}
              </div>
              <span className="font-extrabold text-slate-700 text-xs">
                {stat.base_stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
