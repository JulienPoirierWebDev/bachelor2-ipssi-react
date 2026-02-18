const Card = ({ carte }) => {
  return (
    <div
      onClick={() => {
        console.log(carte);
      }}
    >
      {carte}
    </div>
  );
};

export default Card;
// A la ligne 5, on a la donnée que l'on veut garder.
// Mais elle ne sert a rien ici. Comment faire pour la faire
// "remonter" dans le composant Memory ?
