// to define the list of route segment parameters that will be statically generated at build time instead of on-demand
//replaces getStaticPaths, doesn't require any context parameters
//runs at build time, will not be called again during revalidation (ISR)
import { use } from "react";
import Image from "next/legacy/image";

// can use async/await in layouts and pages, which are Server Components
// similar to getStaticPaths

interface PageProps {
  params: {
    pokemonId: string;
  };
}

interface Moves {
  move: { name: string };
}

interface PMoves {
  data: {
    pokemon: {
      id: number;
      name: string;
      sprites: {
        front_default: string;
      };
      moves: Moves[];
    };
  };
}

const fetchData = async (pokemonId: string) => {
  const POKEMON_DETAIL = `
  query pokemon( $name: String!) {
      pokemon(name: $name) {
        id
        name
        sprites {
          front_default
        }
        moves {
          move {
            name
          }
        }
      }
    }
  `;

  const res = await fetch("https://graphql-pokeapi.graphcdn.app/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: POKEMON_DETAIL,
      variables: { name: pokemonId },
    }),
  });

  const details = await res.json();
  return details;
};

// export async function generateStaticParams({ pokemonId }: any) {
//   const data = await getPokemons();
//   // console.log(data);

//   // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
//   // const data = await res.json();

//   // const ids = data.moves.move.map((m))
//   // return [
//   //   { pokemonId: "bulbasaur" },
//   //   { pokemonId: "ivysaur" },
//   //   { pokemonId: "venusaur" },
//   // ];
//   return data?.pokemons?.results?.map((p: { name: string }) => ({
//     pokemonId: p.name,
//   }));
// }

// export async function generateStaticParams(pokemonId: string) {
//   const pokemons = await fetchData(pokemonId);
//   const result = pokemons.map((m: Moves) => ({
//     pokemonId: m.move.name.toString(),
//   }));
//   return result;
// }

function SpecificPokemon({ params }: PageProps) {
  const { pokemonId } = params;
  const pokemonMoves: PMoves = use(fetchData(pokemonId));

  return (
    <div className="space-y-6 py-8 mx-4 text-base leading-7">
      <h1 className="capitalize">{pokemonId}</h1>
      <div className="mx-auto w-56 h-40 bg-yellow-100 rounded-full">
        <Image
          priority
          height={250}
          width={260}
          alt={pokemonId}
          src={pokemonMoves.data.pokemon.sprites.front_default}
        />
      </div>

      <h2>Moves:</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 p-5 bg-green-100 rounded-2xl">
        {pokemonMoves.data.pokemon.moves.map((m: Moves, i: number) => (
          <ul key={i}>
            <li>{m.move.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default SpecificPokemon;
