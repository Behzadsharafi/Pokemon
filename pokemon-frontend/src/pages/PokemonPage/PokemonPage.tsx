import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Pokemon } from "../../scripts/interfaces";
import styles from "./PokemonPage.module.scss";
import PokemonView from "../../components/PokemonView/PokemonView";
import Button from "../../components/Button/Button";
import { getPokemonById } from "../../services/backend-service";

const PokemonPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState<Pokemon>();

  const [errorMess, setErrorMess] = useState("");

  useEffect(() => {
    // setLoading(true);
    if (errorMess) {
      setErrorMess("");
    }
    if (id) {
      getPokemonById(parseInt(id))
        .then((pokemon) => {
          setPokemon(pokemon);
        })
        .catch((err) => setErrorMess(err.message));
      // .finally(() => setLoading(false));
    } else {
      setErrorMess("There is no ID in URL");
      // setLoading(false);
    }
  }, [id]);

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

      {pokemon && <PokemonView pokemon={pokemon} />}
    </div>
  );
};

export default PokemonPage;
