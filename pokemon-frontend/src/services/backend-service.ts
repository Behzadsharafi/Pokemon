import {
  CreatePokemonDTO,
  Pokemon,
  UpdatePokemonDTO,
} from "../scripts/interfaces";

// const hostDomain = `http://localhost:3000/`;
const hostDomain = `https://testrepo-production-d475.up.railway.app/`;

export const getAllPokemon = async (): Promise<Pokemon[]> => {
  //// fetch data
  const response = await fetch(`${hostDomain}pokemon`);

  if (!response.ok) {
    throw new Error("Could not get Pokemons");
  }

  const data = await response.json();
  return data;
};

export const createPokemon = async (data: CreatePokemonDTO): Promise<void> => {
  const formattedData = {
    ...data,
  };

  const response = await fetch(`${hostDomain}pokemon`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formattedData),
  });

  if (!response.ok) {
    const errorJson = await response.json();
    throw new Error(`Cannot create new pokemon because ${errorJson.message}`);
  }
};

export const getPokemonById = async (id: Pokemon["id"]): Promise<Pokemon> => {
  const response = await fetch(`${hostDomain}pokemon/${id}`);

  if (!response.ok) {
    throw new Error(`Pokemon with id : ${id} does not exist`);
  }

  const pokemon: Pokemon = await response.json();

  return pokemon;
};

export const deletePokemonById = async (id: Pokemon["id"]): Promise<void> => {
  const response = await fetch(`${hostDomain}pokemon/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Could not delete pokemon");
  }
};

export const updatePokemonById = async (
  id: Pokemon["id"],
  data: UpdatePokemonDTO
): Promise<void> => {
  const formattedData = {
    ...data,
  };

  const response = await fetch(`${hostDomain}pokemon/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formattedData),
  });

  if (!response.ok) {
    throw new Error(`Could not update pokemon ${id}`);
  }
};
