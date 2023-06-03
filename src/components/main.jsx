import React, { useMemo, useState } from "react";

const datos = [
  { id: 845, nombre: "Objeto 1", colorFavorito: "azul" },
  { id: 392, nombre: "Objeto 2", colorFavorito: "verde" },
  { id: 716, nombre: "Objeto 3", colorFavorito: "amarillo" },
  { id: 131, nombre: "Objeto 4", colorFavorito: "rojo" },
  { id: 504, nombre: "Objeto 5", colorFavorito: "naranja" },
  { id: 894, nombre: "Objeto 6", colorFavorito: "verde" },
  { id: 675, nombre: "Objeto 7", colorFavorito: "rojo" },
  { id: 330, nombre: "Objeto 8", colorFavorito: "azul" },
  { id: 257, nombre: "Objeto 9", colorFavorito: "verde" },
  { id: 874, nombre: "Objeto 10", colorFavorito: "naranja" },
  { id: 612, nombre: "Objeto 11", colorFavorito: "rojo" },
  { id: 468, nombre: "Objeto 12", colorFavorito: "amarillo" },
  { id: 921, nombre: "Objeto 13", colorFavorito: "azul" },
  { id: 805, nombre: "Objeto 14", colorFavorito: "naranja" },
  { id: 144, nombre: "Objeto 15", colorFavorito: "verde" },
  { id: 926, nombre: "Objeto 16", colorFavorito: "rojo" },
  { id: 740, nombre: "Objeto 17", colorFavorito: "amarillo" },
  { id: 303, nombre: "Objeto 18", colorFavorito: "azul" },
  { id: 677, nombre: "Objeto 19", colorFavorito: "naranja" },
  { id: 149, nombre: "Objeto 20", colorFavorito: "rojo" },
];

const filtrarDatosPorColorAzul = () => {
  console.log("filtrarDatosPorColorAzul ejecutandose");
  for (let i = 0; i < 2000000000; i++) {
    const n = 1 * 10 - 20;
  }
  console.log("filtrarDatosPorColorAzul terminó");
  return datos.filter((d) => d.colorFavorito === "azul");
};

const filtrarDatosPorColor = (color) => {
  console.log("filtrarDatosPorColorAzul ejecutandose");
  for (let i = 0; i < 2000000000; i++) {
    const n = 1 * 10 - 20;
  }
  console.log("filtrarDatosPorColorAzul terminó");
  return datos.filter((d) => d.colorFavorito === color);
};

export const Main = () => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("azul");
  // const datosFiltrados = useMemo(filtrarDatosPorColorAzul, []);

  const datosFiltrados = useMemo(() => {
    return filtrarDatosPorColor(color);
  }, [color]);

  return (
    <div>
      <div>
        <span>{counter}</span>
        <button onClick={() => setCounter((prev) => prev + 1)}>+1</button>
      </div>
      <button onClick={() => setColor("azul")}>azul</button>
      <button onClick={() => setColor("rojo")}>rojo</button>
      <button onClick={() => setColor("verde")}>verde</button>
      {datosFiltrados.map((dato, index) => (
        <p key={index}>{dato.nombre}</p>
      ))}
    </div>
  );
};
