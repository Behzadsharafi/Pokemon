import styles from "./Search.module.scss";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

interface Props {
  handleSearch: any;
}

const Search = ({ handleSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState<null | string>(null);

  useEffect(() => {
    if (searchTerm === "") {
      handleSearch(null);
    }
  }, [searchTerm]);

  const onSearch = () => {
    handleSearch(searchTerm);
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className={styles.form}>
      <input
        type="text"
        placeholder="Search a Pokemon or a Type"
        onChange={onSearchChange}
        onKeyDown={handleKeyDown}
        value={searchTerm || ""}
      />
      <Button className={styles.form__button} onClick={onSearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </Button>
    </div>
  );
};

export default Search;
