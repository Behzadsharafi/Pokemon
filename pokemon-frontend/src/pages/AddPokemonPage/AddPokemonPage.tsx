import styles from "./AddPokemonPage.module.scss";
import PokemonForm from "../../components/PokemonForm/PokemonForm";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const AddPokemonPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <section className={styles.page__topSection}>
        <h2>Pokemon Details</h2>
        <Button
          onClick={() => navigate(`/`)}
          className={styles.page__topSection__button}
        >
          Back
        </Button>
      </section>

      <PokemonForm />
    </div>
  );
};

export default AddPokemonPage;
