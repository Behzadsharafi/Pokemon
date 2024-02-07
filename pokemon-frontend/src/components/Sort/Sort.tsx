import React from "react";
import styles from "./Sort.module.scss";

interface Props {
  sortBy: "level" | "maxHp";
  setSortBy: (sortBy: "level" | "maxHp") => void;
  asc: boolean;
  setAsc: (asc: boolean) => void;
}
const Sort = ({ sortBy, setSortBy, asc, setAsc }: Props) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as "level" | "maxHp");
  };
  const handleAscChange = () => {
    setAsc(!asc);
  };

  return (
    <div className={styles.sort}>
      <label htmlFor="sort">Sorted By</label>
      <select
        id="sort"
        onChange={handleSortChange}
        value={sortBy}
        className={styles.sort__select}
      >
        <option value="maxHp">MaxHp</option>
        <option value="level">Level</option>
      </select>{" "}
      <button className={styles.sort__ascending} onClick={handleAscChange}>
        <i className="fa-solid fa-sort"></i>
      </button>
    </div>
  );
};

export default Sort;
