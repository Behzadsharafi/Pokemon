import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import PokemonList from "../../components/PokemonList/PokemonList";
import styles from "./HomePage.module.scss";
import Search from "../../components/Search/Search";
import { useState } from "react";
import Sort from "../../components/Sort/Sort";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<null | string>(null);
  const [sortBy, setSortBy] = useState<"level" | "maxHp" | "">("");
  const [asc, setAsc] = useState(true);

  const searchHandler = (searchTerm: string | null) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className={styles.page}>
      <section className={styles.page__topSection}>
        <h2>Play With Pokemon!</h2>
        <Button
          onClick={() => navigate(`/add`)}
          className={styles.page__topSection__button}
        >
          Add New Pokemon
        </Button>
        <Sort sortBy={sortBy} setSortBy={setSortBy} asc={asc} setAsc={setAsc} />
      </section>

      <Search handleSearch={searchHandler} />

      <PokemonList sortBy={sortBy} asc={asc} searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;
