export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonRes {
  count: number;
  next: string;
  previous?: any;
  results: Pokemon[];
}
