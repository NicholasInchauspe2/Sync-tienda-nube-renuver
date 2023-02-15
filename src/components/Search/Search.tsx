import React, { useState } from "react";
import Image from "next/image";
import { Search } from "../../types";
import styles from "./search.module.scss";
import { Icons } from "@/constants/assets.constants";

const Search = ({
  handleSearch = () => {},
  hadleChange = () => {},
  name,
  variant,
  placeholder,
}: Search) => {
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("");

  const onChange = ({ target }: any) => {
    setValue(target.value);
    hadleChange(target.value);
  };

  const onClick = () => {
    handleSearch(value, filter, setValue, setFilter);
  };

  return (
    <div className={`${styles.container} ${styles[variant]}`}>
      <select name="" id="filter">
        <option value="1">Todos los Iphones</option>
      </select>
      <input
        type="search"
        name={name}
        id="name"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button onClick={onClick}>
        <div className={styles.logoContainer}>
          <Image src={Icons.SEARCH} alt="search Logo" layout="fill" />
        </div>
      </button>
    </div>
  );
};

export default Search;
