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
