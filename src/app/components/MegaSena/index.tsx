export default function MegaSena() {
  function mega(qtd = 6) {
    if (qtd < 6 && qtd > 6) {
      throw "Quantidade inválida";
    }
  }
  return (
    <div className="w-[200px] h-[200px] rounded-[4px] bg-slate-300 ">
      <header className="w-full h-10 flex items-center justify-center bg-cyan-800 rounded-t-[4px]">
        <h1 className="text-emerald-300">Mega-Sena</h1>
      </header>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex gap-1 text-2xl">
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
          <span>0</span>
        </div>
        <button className="p-2 rounded-[4px] bg-gray-500 hover:bg-gray-400 text-lg shadow-lg">
          Gerar Aposta
        </button>
      </div>
    </div>
  );
}
