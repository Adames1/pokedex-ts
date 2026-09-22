import { useEffect, useState } from "react";
import { useAppStore } from "./store/useAppStore";
import PokemonCard from "./components/PokemonCard";
import PanelPokemonDetails from "./components/PanelPokemonDetails";

export default function App() {
  const pokemons = useAppStore((state) => state.pokemons);
  const fetchPokemons = useAppStore((state) => state.fetchPokemons);
  const searchPokemon = useAppStore((state) => state.searchPokemon);
  const [searchPokemonName, setSearchPokemonName] = useState("");

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPokemonName(e.target.value);
    searchPokemon(e.target.value);
  };

  return (
    <div className="min-h-screen bg-[#F1F2FA] overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8 space-y-8 overflow-hidden">
        <header className="w-full bg-white shadow rounded-md p-4">
          <h1 className="text-xl font-extrabold text-center">Pokédex</h1>
        </header>

        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-full space-y-6">
            {/* Busqueda, opciones de filtros y paginacion */}
            <div className="bg-white rounded-lg shadow px-4 py-4 flex items-center gap-4">
              <input
                type="search"
                name="name"
                placeholder="Search your Pokémon!"
                className="w-full outline-none text-sm placeholder:text-gray-500"
                onChange={handleChange}
                value={searchPokemonName}
              />
              <div className="bg-red-400 p-1 rounded-lg">
                <img src={"/public/icon-pokeball_search.svg"} />
              </div>
            </div>

            <div className="">Otros filtros</div>

            {/* Contenido principal */}
            <main className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 min-w-0">
              {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </main>
          </div>

          {/* Panel para detalles de pokemon - Responsive*/}
          <PanelPokemonDetails />
        </div>
      </div>
    </div>
  );
}
