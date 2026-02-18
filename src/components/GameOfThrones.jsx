import styles from "./GameOfThrones.module.css";

const GameOfThrones = () => {
  // Etape 1 : Dans sidebar, on affiche la liste des maisons.

  // Avec l'url : https://www.anapioficeandfire.com/api/houses

  // Bonus : faire des composants pour la tuile maison.

  // Etape 2 : Quand on clic sur l'une des familles:
  // Les membres de la famille s'affiche dans la div contenu principal
  // Pas bcp d'infos sur la personne : nom prénom un bouton "détails"

  // Bonus : faire des composants pour la card personnage.

  // Etape 3 : quand on clic sur "détails", une popup (ou autre) s'affiche avec les détails sur personnage.
  // Vous aurez besoin d'un rendu conditionnel : ternaire. 

  //

  return (
    <div className={styles.layout}>
      <aside className="sidebar">
        <h2>Sidebar</h2>
        {
          // Afficher les maisons ici
          // Quand on clic sur une des maison
        }
      </aside>

      <div className="content">
        <h2>Contenu principal</h2>
      </div>
    </div>
  );
};

export default GameOfThrones;
