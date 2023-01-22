"use client";
import useSWR from "swr";
import Link from "next/link";
function Clientpage() {
  const feteher = (path) => fetch(`https://rickandmortyapi.com/${path}`).then((res) => res.json());
  const characters = useSWR("api/character", feteher);
  return (
    <div>
      <h2> Client-side data fetching</h2>
      {characters?.data?.results.map((c) => (
        <ul key={c.id}>
          <Link href={`/staticProps/${c.name}`}>
            <li>{c.name}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}

export default Clientpage;
