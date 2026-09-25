import { useMemo } from "react";
import { useAppStore } from "../store/useAppStore";
import PokemonDetails from "./PokemonDetails";

export default function PanelPokemonDetails() {
  const selectedPokemon = useAppStore((state) => state.selectedPokemon);
  const showPanel = useAppStore((state) => state.showPanel);
  const closePanel = useAppStore((state) => state.closePanel);

  const hasSelectedPokemon = useMemo(
    () => Object.keys(selectedPokemon).length,
    [selectedPokemon],
  );

  return (
    <aside
      className={`fixed inset-0 z-50 bg-white p-4 rounded-md
        transform transition-transform duration-300 ease-in-out
        ${showPanel ? "translate-x-0" : "translate-x-full"}
         md:inset-auto md:z-auto md:translate-x-0
        md:w-82 md:h-160 lg:h-170 md:shrink-0 md:sticky shadow`}
    >
      <>
        <button
          className="bg-slate-200 font-medium text-black text-sm px-2 py-1 rounded-lg cursor-pointer md:hidden"
          onClick={closePanel}
        >
          Cerrar
        </button>

        {hasSelectedPokemon ? (
          <div className="mt-10 md:mt-0 flex items-center justify-center">
            <PokemonDetails selectedPokemon={selectedPokemon} />
          </div>
        ) : (
          <p className="text-md text-slate-800 text-center my-20">
            No has seleccionado un Pokémon. Has clic en un Pokémon para ver el
            detalle.
          </p>
        )}
      </>
    </aside>
  );
}
