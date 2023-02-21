import React, { useState } from "react";
import Image from "next/image";
import Menu from "../Menu";
import Search from "@/components/Search";
import styles from "./navbar.module.scss";
import { Icons } from "@/constants/assets.constants";

const Navbar = ({}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClick = () => setIsOpenMenu(!isOpenMenu);

  return (
    <header id={styles.header}>
      <div className={styles.section1}>
        <figure className={styles.logo}>
          <Image src={Icons.LOGO} alt="Renuver Logo" layout="fill" />
        </figure>
        <Search
          name="searchdesktop"
          variant="secundary"
          placeholder="Buscá por modelos"
        />
        <figure className={styles.login}>
          <Image src={Icons.LOGIN} alt="login Logo" layout="fill" />
        </figure>
        <div className={`${styles.burgerContainer} ${isOpenMenu ? styles.openMenu : ""}`}>
          <button
            onClick={handleClick}
            className={`${styles.burger}`}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
        
        <Menu isOpen={isOpenMenu} handleClick={handleClick} />
      </div>
      <nav className={styles.section2}>
        <Search
          name="searchMobile"
          variant="primary"
          placeholder="Buscá por modelos"
        />
      </nav>
    </header>
  );
};

export default Navbar;
