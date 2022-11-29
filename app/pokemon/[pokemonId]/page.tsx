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

  const data = await res.json();
  return data;
};

// export async function generateStaticParams() {
//   // const moves = await fetchData();
//   // return moves.moves.map((m: { move: { name: string } }) => ({
//   //   pokemonId: m.move.name.toString(),
//   // }));
//   return [
//     {
//       pokemonId: "1",
//     },
//   ];
// }
export async function generateStaticParams({ pokemonId }: any) {
  console.log(pokemonId);
  return [
    { pokemonId: "bulbasaur" },
    { pokemonId: "ivysaur" },
    { pokemonId: "venusaur" },
  ];
}

async function SpecificPokemon({ params }: PageProps) {
  const { pokemonId } = params;
  const pokemonMoves: PMoves = await fetchData(pokemonId);

  return (
    <div>
      <h1>{pokemonId}</h1>
      <div>
        <h3>Moves:</h3>
        {pokemonMoves.moves.map((m: { move: { name: string } }, i: number) => (
          <ul key={i}>
            <li>{m.move.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default SpecificPokemon;
