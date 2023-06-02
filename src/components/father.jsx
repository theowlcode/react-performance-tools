import React, { useState } from "react";
import { FirstChildren } from "./first-children";
import { SecondChildren } from "./second-children";

export const Father = () => {
  const [counter, setCounter] = useState(100);
  console.log("FATHER Renderizar");
  return (
    <div>
      <h2>FATHER COMPONENT TITLE</h2>
      <span>{counter}</span>
      <button onClick={() => setCounter((prev) => prev + 10)}>
        INCREMENTAR 10
      </button>
      <FirstChildren />
      <SecondChildren />
      {/* <FirstChildren counter={fCounter} setCounter={setFCounter} />
      <SecondChildren counter={sCounter} setCounter={setSCounter} /> */}
    </div>
  );
};
