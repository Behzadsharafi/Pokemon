import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { schema } from "../../scripts/schema";
import styles from "./PokemonForm.module.scss";
import {
  CreatePokemonDTO,
  Pokemon,
  UpdatePokemonDTO,
  pokemonTypes,
} from "../../scripts/interfaces";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "../Paper/Paper";
import {
  createPokemon,
  updatePokemonById,
} from "../../services/backend-service";
import Button from "../Button/Button";

export interface PokemonFormProps {
  pokemon?: Pokemon;
}

interface FormData extends yup.InferType<typeof schema> {}

const PokemonForm: React.FC<PokemonFormProps> = ({
  pokemon,
}: PokemonFormProps) => {
  const [errorMess, setErrorMess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getDefaultVal = (
    fieldName: keyof UpdatePokemonDTO | keyof CreatePokemonDTO,
    manualDefault: string | number | null | undefined = undefined
  ) => {
    if (pokemon) {
      const val = pokemon[fieldName];
      if (val === null) return null;
      return val;
    } else return manualDefault;
  };

  const navigate = useNavigate();

  const formSubmit = async (data: FormData) => {
    const formattedData = { ...data };
    setIsSubmitting(true);
    setErrorMess(errorMess ? "" : errorMess);

    // create pokemon
    if (!pokemon) {
      const toCreateData: CreatePokemonDTO = {
        ...formattedData,
      };

      try {
        await createPokemon(toCreateData);
        console.log("New pokemon created", toCreateData);
        setIsSubmitting(false);
        navigate("/");
      } catch (error) {
        setIsSubmitting(false);
        setErrorMess((error as Error).message);
        console.error(error);
      }
    }
    // edit pokemon
    else {
      const toUpdateData: UpdatePokemonDTO = { ...formattedData };

      try {
        // Pokemons.updatePokemon(pokemon.id, toUpdateData);
        await updatePokemonById(pokemon.id, toUpdateData);
        console.log(
          Object.keys(toUpdateData).length === 0
            ? `Pokemon ${pokemon.id} is unchanged`
            : `Pokemon ${pokemon.id} is updated`
        );
        setIsSubmitting(false);
        navigate("/");
      } catch (errors) {
        // setErrorMess((errors as Error).message);
        setIsSubmitting(false);
        console.log(errors);
      }
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <Paper className={styles.card}>
      <form className={styles.form} onSubmit={handleSubmit(formSubmit)}>
        {/* ------- section ------- */}
        <div className={styles.field}>
          <label htmlFor="name">Pokemon name</label>
          <input
            id="name"
            type="text"
            {...register("name")}
            defaultValue={getDefaultVal("name") as string}
          />

          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>

        <div className={styles.field}>
          <label htmlFor="level">Level</label>
          <input
            id="level"
            type="number"
            {...register("level")}
            defaultValue={getDefaultVal("level", 0) as number}
          />
          {errors.level && (
            <p className={styles.error}>{errors.level.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="maxHp">MaxHP</label>
          <input
            id="maxHp"
            type="number"
            {...register("maxHp")}
            defaultValue={getDefaultVal("maxHp", 0) as number}
          />
          {errors.maxHp && (
            <p className={styles.error}>{errors.maxHp.message}</p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="type">Pokemon type</label>
          <select
            id="type"
            {...register("type")}
            defaultValue={getDefaultVal("type") as string}
          >
            <option value="">Select type</option>
            {pokemonTypes.map((pokemonType, index) => (
              <option key={index} value={pokemonType.type}>
                {pokemonType.type.charAt(0).toUpperCase() +
                  pokemonType.type.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
          {errors.type && <p className={styles.error}>{errors.type.message}</p>}
        </div>

        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
      {errorMess && <p className={styles.error}>{errorMess}</p>}
      {isSubmitting && <p>Submitting....</p>}
    </Paper>
  );
};

export default PokemonForm;
