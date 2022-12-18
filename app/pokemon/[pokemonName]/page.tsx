// to define the list of route segment parameters that will be statically generated at build time instead of on-demand
//replaces getStaticPaths, doesn't require any context parameters
//runs at build time, will not be called again during revalidation (ISR)
import { use } from "react";
import Image from "next/legacy/image";

// can use async/await in layouts and pages, which are Server Components
// similar to getStaticPaths

type PageParams = {
  pokemonName: string;
};

type PageProps = {
  params: PageParams;
  searchParams?: { currentPage: number };
};

interface Moves {
  move: { name: string };
}

interface IPokemonData {
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
// interface getPokemonsTS {
//   data: {
//     pokemons: {
//       count: number;
//       results: [
//         {
//           id: number;
//           name: string;
//         }
//       ];
//     };
//   };
// }

const fetchData = async (pokemonName: string) => {
  const POKEMON_DETAIL = `
  query pokemon($name: String!) {
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
      variables: { name: pokemonName },
    }),
  });

  const details = await res.json();
  return details;
};

export const generateStaticParams = async (): Promise<PageParams[]> => {
  const res: IPokemonData = await fetchData("charmander");
  // console.log(res);

  return [
    {
      pokemonName: res?.data.pokemon.name,
    },
  ];

  // res.data.pokemon.name.((p: { pokemonName: string }) => ({
  //   pokemonName: p.pokemonName,
  // }));
  //   return [
  //   { pokemonName: "bulbasaur" },
  //   { pokemonName: "ivysaur" },
  //   { pokemonName: "venusaur" },
  // ];
  // return result;
};

export default function SpecificPokemon({ params }: PageProps) {
  const { pokemonName } = params;
  const pokemonData: IPokemonData = use(fetchData(pokemonName));

  return (
    <div className="space-y-6 py-8 mx-4 text-base leading-7">
      <h1 className="py-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 capitalize">
        {pokemonName}
      </h1>
      <div className="mx-auto w-56 h-56 bg-green-100 rounded-full">
        <Image
          priority
          height={250}
          width={260}
          alt={`${pokemonName}`}
          src={`${pokemonData.data.pokemon.sprites.front_default}`}
        />
      </div>

      <h2>Moves</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 p-5 bg-yellow-100 rounded-2xl">
        {pokemonData.data.pokemon.moves.map((m: Moves, i: number) => (
          <ul key={i}>
            <li>{m.move.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
