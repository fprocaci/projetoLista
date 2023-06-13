"use client";

import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  function addContador() {
    return setContador(contador + 1);
  }

  function revContador() {
    if (contador > 0) {
      return setContador(contador - 1);
    }
  }

  return (
    <div className="p-10 flex flex-col items-center justify-center rounded-[4px] bg-slate-300 ">
      <h1>Contador</h1>
      <div>{contador}</div>
      <div className="flex gap-2">
        <button
          className="w-10 h-10 rounded-[4px] bg-gray-500 text-lg shadow-lg"
          onClick={revContador}
        >
          -
        </button>
        <button
          className="w-10 h-10 rounded-[4px] bg-gray-500 text-lg shadow-lg"
          onClick={addContador}
        >
          +
        </button>
      </div>
    </div>
  );
}
