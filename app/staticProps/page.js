import Link from "next/link";
import { use } from "react";
function StaticProps() {
  const allCharacters = use(getCharacters());
  async function getCharacters() {
    return await (await fetch("https://rickandmortyapi.com/api/character")).json();
  }
  return (
    <div>
      <h2> getStaticProps</h2>
      {allCharacters?.results.map((c) => (
        <ul key={c.id}>
          <Link href={`/staticprops/${c.name}`}>
            <li>{c.name}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}

export default StaticProps;
