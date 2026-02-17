import { useState } from "react";
import styles from "./Clicker.module.css";

const ameliorations = [
  {
    nouvelleValeur: 2,
    cout: 3,
  },
  {
    nouvelleValeur: 4,
    cout: 10,
  },
  {
    nouvelleValeur: 8,
    cout: 25,
  },
  {
    nouvelleValeur: 16,
    cout: 60,
  },
  {
    nouvelleValeur: 32,
    cout: 120,
  },
  {
    nouvelleValeur: 64,
    cout: 250,
  },
  {
    nouvelleValeur: 128,
    cout: 600,
  },
  {
    nouvelleValeur: 256,
    cout: 1500,
  },
  {
    nouvelleValeur: 512,
    cout: 4000,
  },
  {
    nouvelleValeur: 1024,
    cout: 10000,
  },
  {
    nouvelleValeur: 2048,
    cout: 25000,
  },
];

const Clicker = () => {
  // Faire un rond : 0

  // Quand on clic sur le rond, on gagne un point
  const [points, setPoints] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [used, setUsed] = useState(false);
  const [upgradeIndex, setUpgradeIndex] = useState(0);

  function handleUpgrade() {
    setIncrement(ameliorations[upgradeIndex].nouvelleValeur);
    setPoints(points - ameliorations[upgradeIndex].cout);
    setUpgradeIndex(upgradeIndex + 1);

    if (upgradeIndex + 1 > ameliorations.length - 1) {
      setUsed(true);
    }
  }

  const handleClicker = () => {
    setPoints(points + increment);
  };

  const upgradeButton =
    !used && points >= ameliorations[upgradeIndex].cout ? (
      <button onClick={handleUpgrade}>
        {ameliorations[upgradeIndex].nouvelleValeur} points par clic. Cout :{" "}
        {ameliorations[upgradeIndex].cout}
      </button>
    ) : null;
  // Afficher le rond + Afficher le nom total de points.
  return (
    <>
      <div className={styles.clicker} onClick={handleClicker}></div>

      <div>
        <p>Vous avez {points} points</p>
      </div>

      <div>
        <h2>Amélioration</h2>
        {upgradeButton}
      </div>
    </>
  );
};

export default Clicker;
