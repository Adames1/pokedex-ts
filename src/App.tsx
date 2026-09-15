import { useEffect } from "react";
import { useAppStore } from "./store/useAppStore";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const pokemons = useAppStore((state) => state.pokemons);
  const fetchPokemons = useAppStore((state) => state.fetchPokemons);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="min-h-screen bg-[#F1F2FA]">
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <main className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </main>
      </div>
    </div>
  );
}
