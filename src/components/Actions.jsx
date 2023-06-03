import React from "react";

export const Actions = React.memo(({ handleIncrement, handleDecrement }) => {
  console.log("renderizando acciones");
  return (
    <>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </>
  );
});
