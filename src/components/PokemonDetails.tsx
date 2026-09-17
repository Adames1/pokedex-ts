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
      <img
        src={selectedPokemon.sprites.front_default}
        alt={selectedPokemon.name}
        className="w-20 h-20 mx-auto object-contain"
      />

      <span className="text-xs font-semibold text-gray-400">{`N° ${selectedPokemon.id}`}</span>

      <h2 className="text-lg font-extrabold text-slate-800 capitalize">
        {selectedPokemon.name}
      </h2>

      <div className="flex flex-col gap-2 justify-center md:flex-row">
        {selectedPokemon.types.map((type) => (
          <TypeBadge key={type.slot} type={type} />
        ))}
      </div>

      <div className="mt-8 space-y-2">
        <h3 className="uppercase text-sm font-bold text-slate-900">
          Abilities
        </h3>
        <div className="flex gap-2">
          {selectedPokemon.abilities.map((ability) => (
            <div
              key={ability.slot}
              className={`capitalize text-xs font-bold text-slate-800 bg-slate-50 border-[1.5px] border-slate-300 px-4 py-1 rounded-xl ${ability.is_hidden && "border-red-500 bg-red-500"}`}
            >
              {ability.ability["name"]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
