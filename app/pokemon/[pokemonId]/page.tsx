// to define the list of route segment parameters that will be statically generated at build time instead of on-demand
//replaces getStaticPaths, doesn't require any context parameters
//runs at build time, will not be called again during revalidation (ISR)

// can use async/await in layouts and pages, which are Server Components
// export async function generateStaticParams() {
//   return [{ slug: "ivysaur" }];
// }
import styles from "../../../styles/pokemon.module.css";

interface PageProps {
  params: {
    pokemonId: string;
  };
}

const fetchPokemon = async (pokemonId: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const pokemon = await res.json();
  // console.log(pokemon);
  return pokemon;
};

async function SpecificPokemon({ params: { pokemonId } }: PageProps) {
  const pokemon = await fetchPokemon(pokemonId);

  return (
    <div>
      <h1 className={styles.name}>{pokemonId}</h1>
      <div>
        <h3>Moves:</h3>
        {pokemon.moves.map((m: { move: { name: string } }, i: number) => (
          <ul key={i}>
            <li>{m.move.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default SpecificPokemon;
