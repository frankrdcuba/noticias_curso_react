import React, { useState } from "react";
const useSelect = (stateInicial, opciones) => {
  const [state, setState] = useState(stateInicial);

  const SelectNoticia = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => setState(e.target.value)}
    >
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );
  return [state, SelectNoticia];
};

export default useSelect;
