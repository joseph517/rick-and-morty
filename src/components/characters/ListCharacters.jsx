import axios from "axios";
import { useEffect, useState } from "react";
import { CharacterItem } from "./CharactersItems";

export function ListCharacter() {
  const [characters, setCharacter] = useState(null);

  const URLCHARACTERS = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    axios.get(URLCHARACTERS).then((res) => {
      setCharacter(res.data.results);
    });
  }, []);

  return (
    <div className="row py-5">
      {characters?.map((character) => {
        return <CharacterItem key={character.id} {...character} />;
      })}
    </div>
  );
}
