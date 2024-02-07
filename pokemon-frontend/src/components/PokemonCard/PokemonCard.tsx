import { Pokemon } from "../../scripts/interfaces";
import styles from "./PokemonCard.module.scss";
import { useNavigate } from "react-router-dom";
import Paper from "../Paper/Paper";

interface Props {
  pokemon: Pokemon;
  handleDelete: any;
}

const PokemonCard = ({ pokemon, handleDelete }: Props) => {
  const navigate = useNavigate();

  const onDelete = (id: Pokemon["id"]) => {
    handleDelete(id);
  };

  return (
    <Paper className={styles.card}>
      <section className={styles.card__info}>
        <h4>{pokemon.name}</h4>
        <p>Level: {pokemon.level}</p>
        <p>MaxHP: {pokemon.maxHp}</p>
        <p>Type: {pokemon.type}</p>
      </section>
      <section className={styles.card__actions}>
        <p onClick={() => navigate(`/${pokemon.id}/edit`)}>Edit</p>
        <p
          onClick={() => {
            onDelete(pokemon.id);
          }}
        >
          Delete
        </p>
      </section>
    </Paper>
  );
};

export default PokemonCard;
