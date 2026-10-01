import { useEffect, useState } from "react";
import { useAppStore } from "./store/useAppStore";
import { useDebounce } from "./hooks/useDebounce";
import PokemonCard from "./components/PokemonCard";
import PanelPokemonDetails from "./components/PanelPokemonDetails";
import PokeballLogo from "./components/PokeballLogo";
import { Search } from "lucide-react";
import PokemonNotResults from "./components/PokemonNotResults";
import PokemonLoading from "./components/PokemonLoading";

// Fondo (solo CSS): resplandor rojo suave arriba
const backgroundGlow = {
  backgroundImage:
    "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(248,113,113,0.16), rgba(248,113,113,0) 70%)",
};

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
    <div className="min-h-screen overflow-hidden bg-[#f5f6fa]">
      {/* Fondo decorativo: fijo al viewport, detras del contenido (resplandor + pokebola) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={backgroundGlow}
      >
        {/* Pokebola de contorno, cortada en la esquina inferior derecha */}
        <div className="absolute -right-17.5 -bottom-17.5 h-70 w-70 overflow-hidden rounded-full border-[3px] border-red-500/15">
          <div className="absolute inset-x-0 top-1/2 h-0.75 -translate-y-1/2 bg-red-500/15" />
          <div className="absolute top-1/2 left-1/2 h-21 w-21 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-red-500/15 bg-[#f5f6fa]" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8 space-y-8 overflow-hidden">
        <header className="w-full bg-white shadow rounded-2xl p-4 flex items-center justify-center gap-3 border border-gray-200">
          <PokeballLogo />
          <h1 className="text-xl text-center font-semibold">
            Poké<span className="text-red-500">dex</span>
          </h1>
        </header>

        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-full space-y-6">
            {/* Busqueda, opciones de filtros y paginacion */}
            <div className="bg-white rounded-full shadow px-4 py-2 flex items-center gap-4 border border-gray-200 focus-within:border-red-300 focus-within:ring-2 focus-within:ring-red-400/25 transition">
              <input
                type="search"
                name="name"
                placeholder="Search your Pokémon!"
                className="w-full outline-none text-sm placeholder:text-gray-500"
                onChange={handleChange}
                value={searchPokemonName}
              />
              <div className="bg-red-500 p-1.5 rounded-full flex items-center justify-center">
                <Search size={19} color="white" />
              </div>
            </div>

            {/* Contenido principal */}
            <main className="w-full space-y-5">
              {isLoading ? (
                <PokemonLoading />
              ) : resultsPokemons.length === 0 && isSearchMode ? (
                <PokemonNotResults />
              ) : (
                <>
                  <div className="flex items-center justify-end gap-2">
                    <p className="text-gray-600 font-normal text-sm">
                      Pokemones por página:
                    </p>
                    <select
                      name="pages"
                      className="bg-white rounded-full px-2.5 py-0.5 border border-gray-300 outline-none font-semibold text-gray-600"
                      onChange={handlePagination}
                      value={rateLimit}
                    >
                      <option value="12">12</option>
                      <option value="24">24</option>
                      <option value="48">48</option>
                    </select>
                  </div>

                  <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 min-w-0">
                    {resultsPokemons.map((pokemon) => (
                      <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                  </div>
                </>
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
