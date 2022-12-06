// to define the list of route segment parameters that will be statically generated at build time instead of on-demand
//replaces getStaticPaths, doesn't require any context parameters
//runs at build time, will not be called again during revalidation (ISR)
import { use } from "react";
import Image from "next/legacy/image";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

// can use async/await in layouts and pages, which are Server Components
// similar to getStaticPaths

type PageParams = {
  pokemonId: string;
};

type PageProps = {
  params: PageParams;
  searchParams?: { currentPage: number };
};

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
  console.log(details);
  return details;
};

export const generateStaticParams = async (): Promise<PageParams[]> => {
  // const { pokemonId } = params;
  // console.log(pokemonId);
  const res: PMoves = await fetchData("ivysaur");
  // // console.log(res);
  // // const result = await res.json();
  // // console.log(res);
  return [
    {
      pokemonId: res.data.pokemon.name,
    },
  ];

  // res.data.pokemon.name.((p: { pokemonId: string }) => ({
  //   pokemonId: p.pokemonId,
  // }));
  //   return [
  //   { pokemonId: "bulbasaur" },
  //   { pokemonId: "ivysaur" },
  //   { pokemonId: "venusaur" },
  // ];
  // return result;
};

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
