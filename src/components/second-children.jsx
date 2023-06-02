import React, { useState } from "react";

export const SecondChildren = React.memo(() => {
  const [counter, setCounter] = useState(0);
  console.log("SecondChildren Renderizar");
  return (
    <div>
      <span>{counter}</span>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        INCREMENTAR
      </button>
    </div>
  );
});
