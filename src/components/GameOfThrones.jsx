import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContextProvider";
import styles from "./GameOfThrones.module.css";
import House from "./House";
const GameOfThrones = () => {
  const [houses, setHouses] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);

  const { name } = useContext(UserContext);

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

  useEffect(() => {
    const getHouses = async () => {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/houses",
      );

      const data = await response.json();

      setHouses(data);
    };

    getHouses();
  }, []);
  return (
    <div className={styles.layout}>
      <p>{name}</p>
      <aside className="sidebar">
        <h2>Sidebar</h2>
        {houses.length > 0 ? (
          <>
            {houses.map((house) => {
              return (
                <House
                  key={house.url}
                  house={house}
                  setCharacters={setCharacters}
                  setSelectedHouse={setSelectedHouse}
                  isSelected={selectedHouse === house.name}
                />
              );
            })}
          </>
        ) : null}
      </aside>

      <div className="content">
        <h2>Contenu principal</h2>

        {characters.length > 0 ? (
          characters.map((oneCharacter) => (
            <p key={oneCharacter.url}>{oneCharacter.name}</p>
          ))
        ) : (
          <p>Il n'y a pas de personnage dans cette maison</p>
        )}
      </div>
    </div>
  );
};

export default GameOfThrones;
