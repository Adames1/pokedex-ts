import { useMemo } from "react";
import { useAppStore } from "../store/useAppStore";
import PokemonDetails from "./PokemonDetails";
import PokemonLoading from "./PokemonLoading";

export default function PanelPokemonDetails() {
  const selectedPokemon = useAppStore((state) => state.selectedPokemon);
  const isLoadingDetails = useAppStore((state) => state.isLoadingDetails);
  const showPanel = useAppStore((state) => state.showPanel);
  const closePanel = useAppStore((state) => state.closePanel);

  const hasSelectedPokemon = useMemo(
    () => Object.keys(selectedPokemon).length,
    [selectedPokemon],
  );

  return (
    <aside
      className={`fixed inset-0 z-50 bg-white p-4 rounded-2xl
        transform transition-transform duration-300 ease-in-out
        ${showPanel ? "translate-x-0" : "translate-x-full"}
         md:inset-auto md:z-auto md:translate-x-0
        md:w-75 md:min-h-138.75 md:shrink-0 md:sticky shadow`}
    >
      <>
        <button
          className="bg-slate-100 font-medium text-black text-sm w-20 h-7 rounded-full cursor-pointer md:hidden"
          onClick={closePanel}
        >
          Cerrar
        </button>

        {isLoadingDetails || !selectedPokemon ? (
          <PokemonLoading />
        ) : hasSelectedPokemon ? (
          <div className="mt-4 md:mt-0 flex items-center justify-center">
            <PokemonDetails selectedPokemon={selectedPokemon} />
          </div>
        ) : (
          <div className="min-h-138.75 flex flex-col items-center justify-center gap-2 text-center">
            <img src="/icon_pokeball.svg" />
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-700">Elige un Pokémon</h3>
              <p className="text-sm text-gray-600 font-medium">
                Toca una tarjeta para ver sus estadisticas y habilidades.
              </p>
            </div>
          </div>
        )}
      </>
    </aside>
  );
}
