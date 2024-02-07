import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./AppContainer.module.scss";
import HomePage from "../../pages/HomePage/HomePage";
import AddPokemonPage from "./../../pages/AddPokemonPage/AddPokemonPage";
import EditPokemonPage from "../../pages/EditPokemonPage/EditPokemonPage";
import PokemonPage from "../../pages/PokemonPage/PokemonPage";

const AppContainer = () => {
  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<PokemonPage />} />
            <Route path="/:id/edit" element={<EditPokemonPage />} />
            <Route path="/add" element={<AddPokemonPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppContainer;
