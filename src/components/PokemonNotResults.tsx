export default function PokemonNotResults() {
  return (
    <div className="w-full max-w-sm mx-auto bg-white flex flex-col items-center justify-between rounded-xl shadow-sm p-6 text-center">
      <img src={"/icono_pokeball_search.svg"} alt="Pokemon not search" />

      <h2 className="text-md text-slate-700 font-semibold">
        No encontramos ese Pokemon
      </h2>

      <p className="text-slate-400 text-xs font-medium">
        Revisa como lo escribiste o prueba con otro nombre
      </p>
    </div>
  );
}
