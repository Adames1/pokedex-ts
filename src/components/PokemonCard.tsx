import { useAppStore } from "../store/useAppStore";
import type { Pokemon } from "../types";
import TypeBadge from "./TypeBadge";

type PokemonCardProps = {
  pokemon: Pokemon;
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const selectPokemon = useAppStore((state) => state.selectPokemon);

  return (
    <div
      className="bg-white shadow rounded-lg p-4 flex flex-col gap-2 items-center justify-center text-center cursor-pointer"
      onClick={() => selectPokemon(pokemon.id)}
    >
      <img
        src={
          pokemon.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        }
        alt={pokemon.name}
        className="w-20 h-20 object-contain"
      />

      <span className="text-xs font-semibold text-gray-400">{`N° ${pokemon.id}`}</span>

      <h2 className="text-lg font-extrabold text-slate-800 capitalize">
        {pokemon.name}
      </h2>

      <div className="flex flex-col gap-2 md:flex-row">
        {pokemon.types.map((type) => (
          <TypeBadge key={type.slot} type={type} />
        ))}
      </div>
    </div>
  );
}
