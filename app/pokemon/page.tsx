//https://beta.nextjs.org/docs/data-fetching/fetching
import Image from "next/legacy/image";
import Link from "next/link";
import { use } from "react";

//fetch is currently not supported in Client Components, may trigger multiple re-renders
// cache: 'force-cache' is the default,to fetch fresh data on every fetch request, use the cache: 'no-store' option
async function getPokemons() {
  const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        id
        name
        image
      }
    }
  }`;

  const gqlVariables = {
    limit: 18,
    offset: 0,
  };

  const data = await fetch("https://graphql-pokeapi.graphcdn.app/", {
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: gqlQuery,
      variables: gqlVariables,
    }),
    method: "POST",
  });

  const pokes = await data.json();
  return pokes;
}

//use is a new React function, accepts a promise, conceptually similar to await
export default function AllPokemons() {
  const allPokemons = use(getPokemons());
  // console.log(allPokemons);

  return (
    <div id="pokemon" className="space-y-6 pt-2">
      <div className="text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
        <h1>List of Pokémon</h1>
      </div>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 p-2">
        {allPokemons?.data?.pokemons?.results.map(
          (p: { name: string; image: string }, i: number) => (
            <Link key={i} href={`/pokemon/${p.name}`}>
              <div className="w-auto h-auto bg-yellow-100 shadow-lg rounded-3xl hover:bg-green-200">
                <Image width={100} height={100} alt={p.name} src={p.image} />
                <p className="uppercase font-bold">{p.name}</p>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
