import { use } from "react";

function Servertpage() {
  const characters = use(getCharacters());
  async function getCharacters() {
    return await (
      await fetch("https://rickandmortyapi.com/api/character", { cache: "no-store" })
    ).json();
  }
  return (
    <div>
      <h2> Server Side Props</h2>
      {characters?.results.map((c) => (
        <ul key={c.id}>
          <li>{c.name}</li>
        </ul>
      ))}
    </div>
  );
}

export default Servertpage;
