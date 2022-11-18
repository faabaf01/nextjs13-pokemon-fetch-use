import Link from "next/link";
import React from "react";

function PokemonPage() {
  return (
    <div>
      <h1>Pokemon Page</h1>
      <Link href="/pokemon/ivysaur">About Ivysaur </Link>
    </div>
  );
}

export default PokemonPage;
