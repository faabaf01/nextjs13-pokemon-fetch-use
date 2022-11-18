// to define the list of route segment parameters that will be statically generated at build time instead of on-demand
//replaces getStaticPaths, doesn't require any context parameters
//runs at build time, will not be called again during revalidation (ISR)

//You can use async/await in layouts and pages, which are Server Components
export async function generateStaticParams() {
  return [{ slug: "ivysaur" }];
}

function SpecificPokemon() {
  return (
    <div>
      <h1>Ivysaur</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
        perspiciatis qui neque porro itaque amet aut eaque, minus quis ipsum
        iusto excepturi ex dolorum modi recusandae reiciendis eos dicta dolore!
      </p>
    </div>
  );
}

export default SpecificPokemon;
