export default function PokemonLoading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={"/Poké_Ball_icon_loading.svg"}
        alt="Pokeball Loading"
        className="w-16 h-16 animate-spin mb-2"
      />
      <h2 className="text-sm font-semibold text-slate-800">Cargando Pokemon</h2>
      <p className="text-sm font-medium text-slate-500">
        Un momento, por favor.
      </p>
    </div>
  );
}
