import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../contexts/UserContextProvider";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  const { name, setName } = useContext(UserContext);

  const params = useParams();
  const pokeId = params.id;

  console.log(params);

  useEffect(() => {
    const getPoke = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeId}`,
      );

      const data = await response.json();

      setPokemon(data);
    };

    getPoke();
  }, [pokeId]);

  return (
    <>
      <p>Pokemon :)</p>

      {pokemon && <p>{pokemon.name}</p>}
      {name && <p>{name}</p>}
      <label htmlFor="name">Votre nom</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
    </>
  );
};

export default PokemonDetails;

/*[
  {
    "name": "State",
    "value": {
      "abilities": "[{…}, {…}]",
      "base_experience": 112,
      "cries": "{latest: \"https://raw.githubusercontent.com/PokeAPI…}",
      "forms": "[{…}]",
      "game_indices": "[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]",
      "height": 4,
      "held_items": "[{…}, {…}]",
      "id": 25,
      "is_default": true,
      "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/25/encounters",
      "moves": "[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]",
      "name": "pikachu",
      "order": 35,
      "past_abilities": "[{…}]",
      "past_stats": "[{…}, {…}]",
      "past_types": "[]",
      "species": "{name: \"pikachu\", url: \"https://pokeapi.co/api/v2/p…}",
      "sprites": "{back_default: \"https://raw.githubusercontent.com/P…}",
      "stats": "[{…}, {…}, {…}, {…}, {…}, {…}]",
      "types": "[{…}]",
      "weight": 60
    },
    "subHooks": [],
    "debugInfo": null,
    "hookSource": {
      "lineNumber": 7,
      "functionName": "PokemonDetails",
      "fileName": "http://localhost:5173/src/components/PokemonDetails.jsx?t=1771508027980",
      "columnNumber": 41
    }
  },
  {
    "name": "Params",
    "subHooks": [
      {
        "name": "Route",
        "value": {
          "outlet": null,
          "matches": "[{…}]",
          "isDataRoute": true
        },
        "subHooks": [],
        "debugInfo": null,
        "hookSource": {
          "lineNumber": 6039,
          "functionName": "useParams",
          "fileName": "http://localhost:5173/node_modules/.vite/deps/react-router.js?v=96879707",
          "columnNumber": 28
        }
      }
    ],
    "debugInfo": null,
    "hookSource": {
      "lineNumber": 8,
      "columnNumber": 18,
      "functionName": "PokemonDetails",
      "fileName": "http://localhost:5173/src/components/PokemonDetails.jsx?t=1771508027980"
    }
  },
  {
    "name": "Effect",
    "value": "() => {}",
    "subHooks": [],
    "debugInfo": null,
    "hookSource": {
      "lineNumber": 11,
      "functionName": "PokemonDetails",
      "fileName": "http://localhost:5173/src/components/PokemonDetails.jsx?t=1771508027980",
      "columnNumber": 12
    }
  }
]

*/
