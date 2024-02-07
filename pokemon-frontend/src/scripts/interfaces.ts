interface BasePokemon {
  name: string;
  level: number;
  maxHp: number;
  type: string;
}

export interface Pokemon extends BasePokemon {
  id: number;
}

export interface CreatePokemonDTO extends BasePokemon {}

export interface UpdatePokemonDTO extends Partial<BasePokemon> {}

export const pokemonTypes = [
  "fire",
  "water",
  "grass",
  "electric",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dark",
  "dragon",
  "steel",
  "fairy",
];
