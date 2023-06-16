import { useState, useTransition } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();
  console.log("rendering");
  const handleChange = (e) => {
    startTransition(() => {
      const chunk = 8000;
      const newItems = [];
      for (let i = 0; i <= chunk; i++) {
        newItems.push(e.target.value);
      }
      setItems(newItems);
    });

    setInput(e.target.value);
  };

  return (
    <div>
      <input placeholder="termino" name="term" onChange={handleChange} />
      <div>
        {isPending ? (
          <p>...loading</p>
        ) : (
          items.map((value, index) => <p key={index}>{value}</p>)
        )}
      </div>
    </div>
  );
}

export default App;
