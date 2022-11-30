// to define the list of route segment parameters that will be statically generated at build time instead of on-demand
//replaces getStaticPaths, doesn't require any context parameters
//runs at build time, will not be called again during revalidation (ISR)
import { use } from "react";

// can use async/await in layouts and pages, which are Server Components
// similar to getStaticPaths

interface PageProps {
  params: {
    pokemonId: string;
  };
}

interface PMoves {
  moves: [{ move: { name: string } }];
}

const fetchData = async (pokemonId: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
};

export async function generateStaticParams({ pokemonId }: any) {
  // console.log(pokemonId);
  return [
    { pokemonId: "bulbasaur" },
    { pokemonId: "ivysaur" },
    { pokemonId: "venusaur" },
  ];
}
// export async function generateStaticParams(pokemonId: string) {
//   const pokemons = await fetchData(pokemonId);
//   const result = pokemons.map((m: { move: { name: string } }) => ({
//     pokemonId: m.move.name.toString(),
//   }));
//   return result;
// }

function SpecificPokemon({ params }: PageProps) {
  const { pokemonId } = params;
  const pokemonMoves: PMoves = use(fetchData(pokemonId));

  return (
    <div className="space-y-6 py-8 ml-10 text-base leading-7">
      {/* {JSON.stringify(pokemonMoves)} */}
      <h1>{pokemonId}</h1>
      <div>
        <h2>Moves:</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 p-10 bg-lime-300 rounded-2xl">
          {pokemonMoves.moves.map(
            (m: { move: { name: string } }, i: number) => (
              <ul key={i}>
                <li>{m.move.name}</li>
              </ul>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default SpecificPokemon;
