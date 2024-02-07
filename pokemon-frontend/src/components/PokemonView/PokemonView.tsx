import { Pokemon } from "../../scripts/interfaces";
import styles from "./PokemonView.module.scss";
import Paper from "../Paper/Paper";

interface PokemonProps {
  suburb: Pokemon;
}

const PokemonView = ({ suburb }: PokemonProps) => {
  return (
    <Paper className={styles.card}>
      <p className={styles.card__item}>
        <span className={styles.card__item__label}>Full Name:</span>{" "}
        {suburb?.name} {suburb?.level} {suburb?.maxHp}
      </p>
    </Paper>
  );
};

export default PokemonView;
