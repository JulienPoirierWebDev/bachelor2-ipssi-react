const House = ({ house, setCharacters, setSelectedHouse, isSelected }) => {
  return (
    <p
      className={isSelected ? "selected" : ""}
      onClick={async () => {
        setSelectedHouse(house.name);
        const allCharacters = house.swornMembers.map(async (member) => {
          try {
            const response = await fetch(member);
            const data = await response.json();
            return data;
          } catch (error) {
            console.log(error);
          }
        });

        try {
          const allData = await Promise.all(allCharacters);
          setCharacters(allData);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {house.name}
    </p>
  );
};

export default House;
