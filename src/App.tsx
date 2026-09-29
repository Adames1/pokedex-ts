import { useEffect, useState } from "react";
import { useAppStore } from "./store/useAppStore";
import PokemonCard from "./components/PokemonCard";
import PanelPokemonDetails from "./components/PanelPokemonDetails";
import { useDebounce } from "./hooks/useDebounce";

export default function App() {
  const pokemons = useAppStore((state) => state.pokemons);
  const searchResults = useAppStore((state) => state.searchResults);
  const fetchPokemons = useAppStore((state) => state.fetchPokemons);
  const searchPokemon = useAppStore((state) => state.searchPokemon);

  const [searchPokemonName, setSearchPokemonName] = useState("");
  const [rateLimit, setRateLimite] = useState("12");
  const debouncedSearchPokemonName = useDebounce(searchPokemonName, 400);

  const isLoadingList = useAppStore((state) => state.isLoadingList);
  const isSearching = useAppStore((state) => state.isSearching);

  const isSearchMode = searchPokemonName.trim() !== "";
  const isLoading = isSearchMode ? isSearching : isLoadingList;

  useEffect(() => {
    fetchPokemons(rateLimit);
  }, [fetchPokemons, rateLimit]);

  useEffect(() => {
    searchPokemon(debouncedSearchPokemonName);
  }, [debouncedSearchPokemonName, searchPokemon]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPokemonName(e.target.value);
  };

  const handlePagination = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setRateLimite(value);
  };

  // condicion para decidir si mostrar pokemon buscado o la lista previa
  const resultsPokemons = isSearchMode ? searchResults : pokemons;

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
                <img src={"/icon-pokeball_search.svg"} />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <p className="text-gray-600 font-semibold text-sm">
                Pokemones por página:
              </p>
              <select
                name="pages"
                className="bg-white rounded-lg px-2 py-1 border border-gray-300 outline-none font-semibold text-gray-600"
                onChange={handlePagination}
                value={rateLimit}
              >
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="48">48</option>
              </select>
            </div>

            {/* Contenido principal */}
            <main className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 min-w-0">
              {isLoading ? (
                <div className="col-span-full mx-auto text-gray-400 text-xl">
                  Cargando...
                </div>
              ) : resultsPokemons.length === 0 && isSearchMode ? (
                <p className="col-span-full text-center text-gray-500">
                  No se encontró ningún Pokémon
                </p>
              ) : (
                resultsPokemons.map((pokemon) => (
                  <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))
              )}
            </main>
          </div>

          {/* Panel para detalles de pokemon - Responsive*/}
          <PanelPokemonDetails />
        </div>
      </div>
    </div>
  );
}
