import styles from "./EditPokemon.module.scss";
import PokemonForm from "../../components/PokemonForm/PokemonForm";
import Button from "../../components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pokemon } from "../../scripts/interfaces";
import { getPokemonById } from "../../services/backend-service";
import Loader from "../../components/Loader/Loader";
// import { Pokemons } from "../../services/pokemon-service";

const AddPokemonPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [errorMess, setErrorMess] = useState("");

  useEffect(() => {
    setLoading(true);
    if (errorMess) {
      setErrorMess("");
    }
    if (id) {
      getPokemonById(parseInt(id))
        .then((pokemon) => {
          setPokemon(pokemon);
        })
        .catch((err) => setErrorMess(err.message))
        .finally(() => setLoading(false));
    } else {
      setErrorMess("There is no ID in URL");
      setLoading(false);
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
      {loading && <Loader />}

      {!loading && pokemon && <PokemonForm pokemon={pokemon} />}
    </div>
  );
};

export default AddPokemonPage;
