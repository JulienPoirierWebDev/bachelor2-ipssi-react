import { useState } from "react";
import Memory from "./components/Memory";

function App() {
  // partie logique : là où l'on calcule, on fetch, etc.
  const [visible, setVisible] = useState(true);
  console.log("Je suis APP");

  // Système de jeu : mémory

  // Cartes : A, B, C, D, E, F

  /*
  Deux cartes de chaque exemplaire. Il faut trouver les paires.

  Quand on trouve la pair, les deux cartes restent affichées.

  1- A partir d'un tableau :
  const cartes = [A, B, C, D, E, F]
  Afficher les cartes en HTML avec un composant "carte".

  2- Quand on clic sur une carte : on sauvegarde le choix de l'utilisateur.

  3- Quand on clic sur une 2e carte, on compare cette carte au choix sauvegardé.

  4- Si les deux sont les mêmes : on enregistre quelles cartes ont été trouvés.

  */

  // Partie visuelle : description de l'UI avec injection de data.
  return (
    <>
      <Memory />
    </>
  );
}

export default App;
