//https://beta.nextjs.org/docs/data-fetching/fetching
import Link from "next/link";
import { use } from "react";
import { PokemonRes } from "../types/types";
// import Image from "next/image";

//fetch is currently not supported in Client Components, may trigger multiple re-renders
// cache: 'force-cache' is the default,to fetch fresh data on every fetch request, use the cache: 'no-store' option
async function getPokemons() {
  return (await (
    await fetch("https://pokeapi.co/api/v2/pokemon/")
  ).json()) as PokemonRes;
}

//use is a new React function, accepts a promise, conceptually similar to await
export default function PokemonPage() {
  const allPokemons = use(getPokemons());
  // console.log(allPokemons);

  return (
    <div>
      <h1>List of Pokémon</h1>
      {allPokemons?.results.map((p: { name: string }, i: number) => (
        <div key={i}>
          <Link href={`/pokemon/${p.name}`}>
            {/* <Image
              width={100}
              height={100}
              alt={p.name}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`}
            /> */}
            <p>{p.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
