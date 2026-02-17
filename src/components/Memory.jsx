import Card from "./Card";

const créerUnJeuDeCarte = (arrayCartesUniques) => {
  const double = [...arrayCartesUniques, ...arrayCartesUniques];

  const nouveauDoubleAvecId = double.map((carte, index) => {
    return { id: index, type: carte };
  });

  // TODO SORT

  return nouveauDoubleAvecId;
};
const Memory = () => {
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

  const cartes = ["A", "B", "C", "D", "E", "F"];

  const paquet = créerUnJeuDeCarte(cartes);


  // cartes = [{id:1, type:"A"}]
  // Pour eviter d'utiliser l'index

  return (
    <>
      {paquet.map((carte) => {
        return <Card key={carte.id} carte={carte.type} />;
      })}
      <p>Memory</p>
    </>
  );
};

export default Memory;
