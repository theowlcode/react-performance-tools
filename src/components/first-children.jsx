import React, { useState } from "react";

export const FirstChildren = React.memo(() => {
  const [counter, setCounter] = useState(-10);
  console.log("FirstChildren Renderizar");
  return (
    <div>
      <span>{counter}</span>
      <button onClick={() => setCounter((prev) => prev - 1)}>
        DECREMENTAR
      </button>
    </div>
  );
});
