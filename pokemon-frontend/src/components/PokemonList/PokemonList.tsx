import { useEffect, useState } from "react";
import styles from "./PokemonList.module.scss";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Pokemon, pokemonTypes } from "../../scripts/interfaces";
import {
  deletePokemonById,
  getAllPokemon,
} from "../../services/backend-service";

interface Props {
  searchTerm: any;
  sortBy: "level" | "maxHp";
  asc: boolean;
}

const PokemonList = ({ searchTerm, sortBy, asc }: Props) => {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
  const [errorMess, setErrorMess] = useState("");
  const [deleteErrorMess, setDeleteErrorMess] = useState("");

  useEffect(() => {
    setErrorMess(errorMess ? "" : errorMess);

    getAllPokemon()
      .then((res) => {
        setPokemons(res);
      })
      .catch((err) => setErrorMess(err.message));
  }, []);

  useEffect(() => {
    if (searchTerm !== null && searchTerm !== "") {
      if (pokemonTypes.includes(searchTerm)) {
        const filtered = pokemons?.filter(
          (pokemon) => pokemon.type === searchTerm
        );
        let sortedPokemons: Pokemon[] = [];
        if (filtered) {
          sortedPokemons = filtered
            .slice()
            .sort((a, b) =>
              asc === true ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
            );
        }
        setPokemons(sortedPokemons);
      } else {
        const filtered = pokemons?.filter((pokemon) =>
          pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        let sortedPokemons: Pokemon[] = [];
        if (filtered) {
          sortedPokemons = filtered
            .slice()
            .sort((a, b) =>
              asc === true ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
            );
        }
        setPokemons(sortedPokemons);
      }
    } else {
      getAllPokemon()
        .then((res) => {
          let sortedPokemons: Pokemon[] = [];
          if (res) {
            sortedPokemons = res
              .slice()
              .sort((a, b) =>
                asc === true ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
              );
          }
          setPokemons(sortedPokemons);
        })
        .catch((err) => setErrorMess(err.message));
    }
  }, [searchTerm, sortBy, asc]);

  const handleDelete = async (id: Pokemon["id"]) => {
    const currentPokemons = pokemons;
    setPokemons((prevPokemons) => {
      if (prevPokemons) {
        return prevPokemons.filter((pokemon) => pokemon.id !== id);
      } else {
        return null;
      }
    });

    try {
      setDeleteErrorMess(deleteErrorMess ? "" : deleteErrorMess);

      // Attempt to delete the pokemon on the server
      await deletePokemonById(id);

      console.log(`Pokemon ${id} is deleted`);
    } catch (error) {
      // If the network request fails, handle the error
      setDeleteErrorMess((error as Error).message);
      console.error(error);

      // Revert the UI back to its previous state using the saved constant
      setPokemons(currentPokemons);
      alert("There was a problem in the server. Could not delete.");
    }
  };

  return (
    <>
      {pokemons && pokemons.length < 1 && (
        <p className={styles.emptyList}>You Still Don't Have any Pokemon!</p>
      )}{" "}
      <div className={styles.list}>
        {pokemons?.map((pokemon) => (
          <PokemonCard
            handleDelete={handleDelete}
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}
      </div>
    </>
  );
};

export default PokemonList;
