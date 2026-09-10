import { Search } from "lucide-react";
import { getPokemons } from "./services/pokemonServices";

export default function App() {
  getPokemons();

  return (
    <div className="min-h-screen bg-[url('./bg-pokedex-mobile.jpg')] md:bg-[url('./bg-pokedex-desktop.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="w-full md:max-w-xl mx-auto px-5 py-8 md:py-10">
        <header className="">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-[#1F2937]">Pokédex</h1>
            <p className="text-sm text-[#6B7280] max-w-xs">
              Busca un Pokémon por nombre o usando el número internacional de
              Pokédex
            </p>
          </div>

          <div className="mt-6 bg-white flex items-center gap-3 px-4 py-3.5 rounded-full border border-[#E5E7EB] shadow-sm focus-within:border-[#93C5FD] transition-colors">
            <Search className="w-5 h-5 text-[#9CA3AF] shrink-0" />
            <input
              type="search"
              placeholder="¿Qué Pokémon buscas?"
              className="placeholder:text-sm placeholder:text-[#9CA3AF] w-full outline-none bg-transparent text-sm text-[#1F2937]"
            />
          </div>

          <main className="mt-6">Contenido principal aqui</main>
        </header>
      </div>
    </div>
  );
}
