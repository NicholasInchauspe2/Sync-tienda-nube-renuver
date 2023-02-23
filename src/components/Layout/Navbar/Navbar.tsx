import React, { useState } from "react";
import Image from "next/image";
import { Icons } from "@/constants/assets.constants";
import Search from "@/components/Search";
import Menu from "../Menu";
import styles from "./navbar.module.scss";
import { useScrollDirection } from "react-use-scroll-direction";


const Navbar = ({}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [lastScroll, setLastScroll] = useState('');
  const [scrollY, setScrollY] = useState(0);

  const handleClick = () => setIsOpenMenu(!isOpenMenu);

  const { isScrollingY, scrollDirection } = useScrollDirection();

  let noSticky = '';

  if (isScrollingY && scrollDirection !== lastScroll) {
    setLastScroll(scrollDirection || lastScroll);
    if(scrollDirection === 'DOWN') setScrollY(window.scrollY);
  };
  if (lastScroll === 'UP') noSticky = '';
  if (lastScroll === 'DOWN' && window.scrollY - scrollY > 200) noSticky = 'noSticky';

  return (
    <header id={styles.header} className={styles[noSticky]}>
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
