import { ListCharacter } from "../characters/ListCharacters";
import { Banner } from "../headers/Banner";

export function Home() {
  return (
    <div>
      <Banner />
      <div className="container">
        <h1 className="py-5"> Personjes destacados</h1>
        <ListCharacter />
      </div>
    </div>
  );
}
