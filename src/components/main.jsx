import React, { useCallback, useState } from "react";
import { Actions } from "./Actions";

/* VALOR - más básicos - strings, number*/
/* REFERNCIA más complejos - arreglos, objetos, funciones*/

export const Main = () => {
  console.log("renderizando main");
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCounter((prev) => prev - 1);
  }, []);

  return (
    <div>
      <p>{counter}</p>
      <Actions
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};
