import Clicker from "./components/Clicker";

function App() {
  // partie logique : là où l'on calcule, on fetch, etc.

  console.log("Je suis APP");



  // Partie visuelle : description de l'UI avec injection de data.
  return (
    <>
      <Clicker />
    </>
  );
}

export default App;
