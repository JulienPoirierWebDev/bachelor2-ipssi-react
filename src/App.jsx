import { useState } from "react";
import DemoUseEffect from "./components/DemoUseEffect";

function App() {
  // partie logique : là où l'on calcule, on fetch, etc.
  const [visible, setVisible] = useState(true);
  console.log("Je suis APP");

  // Partie visuelle : description de l'UI avec injection de data.
  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "Démonter le composant" : "Monter le composant"}
      </button>

      {visible ? <DemoUseEffect /> : null}
    </>
  );
}

export default App;
